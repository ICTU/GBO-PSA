function getMermaidTheme() {
  var scheme = document.body.getAttribute("data-md-color-scheme");
  return scheme === "slate" ? "dark" : "default";
}

function initMermaid() {
  mermaid.initialize({
    startOnLoad: false,
    theme: getMermaidTheme(),
  });

  document.querySelectorAll(".mermaid").forEach(function (el) {
    var source = el.getAttribute("data-mermaid-source");
    if (!source) {
      source = el.textContent;
      el.setAttribute("data-mermaid-source", source);
    }
    el.removeAttribute("data-processed");
    el.innerHTML = source;
  });

  mermaid.run().then(function () {
    document.querySelectorAll(".mermaid").forEach(wrapDiagram);
  });
}

/* ── Interactive viewer: toolbar + fullscreen + zoom ── */

function wrapDiagram(el) {
  if (el.parentElement.classList.contains("mermaid-wrapper")) return;

  var wrapper = document.createElement("div");
  wrapper.className = "mermaid-wrapper";

  var toolbar = document.createElement("div");
  toolbar.className = "mermaid-toolbar";

  var btnZoomIn = btn("+", "Zoom in", function () {
    zoom(wrapper, 1.3);
  });
  var btnZoomOut = btn("\u2212", "Zoom out", function () {
    zoom(wrapper, 1 / 1.3);
  });
  var btnReset = btn("\u21ba", "Reset", function () {
    resetZoom(wrapper);
  });
  var btnFull = btn("\u26f6", "Fullscreen", function () {
    openFullscreen(el);
  });

  toolbar.appendChild(btnZoomIn);
  toolbar.appendChild(btnZoomOut);
  toolbar.appendChild(btnReset);
  toolbar.appendChild(btnFull);

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(toolbar);
  wrapper.appendChild(el);

  // State for pan & zoom
  wrapper._scale = 1;
  wrapper._tx = 0;
  wrapper._ty = 0;
  wrapper._panning = false;

  el.style.cursor = "grab";

  el.addEventListener("mousedown", function (e) {
    wrapper._panning = true;
    wrapper._startX = e.clientX - wrapper._tx;
    wrapper._startY = e.clientY - wrapper._ty;
    el.style.cursor = "grabbing";
    e.preventDefault();
  });

  window.addEventListener("mousemove", function (e) {
    if (!wrapper._panning) return;
    wrapper._tx = e.clientX - wrapper._startX;
    wrapper._ty = e.clientY - wrapper._startY;
    applyTransform(wrapper, el);
  });

  window.addEventListener("mouseup", function () {
    if (!wrapper._panning) return;
    wrapper._panning = false;
    el.style.cursor = "grab";
  });

  el.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      wrapper._scale = Math.min(Math.max(wrapper._scale * factor, 0.2), 5);
      applyTransform(wrapper, el);
    },
    { passive: false },
  );
}

function btn(label, title, onclick) {
  var b = document.createElement("button");
  b.textContent = label;
  b.title = title;
  b.className = "mermaid-btn";
  b.addEventListener("click", onclick);
  return b;
}

function zoom(wrapper, factor) {
  var el = wrapper.querySelector(".mermaid");
  wrapper._scale = Math.min(Math.max(wrapper._scale * factor, 0.2), 5);
  applyTransform(wrapper, el);
}

function resetZoom(wrapper) {
  var el = wrapper.querySelector(".mermaid");
  wrapper._scale = 1;
  wrapper._tx = 0;
  wrapper._ty = 0;
  applyTransform(wrapper, el);
}

function applyTransform(wrapper, el) {
  el.style.transform =
    "translate(" +
    wrapper._tx +
    "px, " +
    wrapper._ty +
    "px) scale(" +
    wrapper._scale +
    ")";
}

/* ── Fullscreen overlay ── */

function openFullscreen(el) {
  var source = el.getAttribute("data-mermaid-source");
  if (!source) return;

  var overlay = document.createElement("div");
  overlay.className = "mermaid-fullscreen";

  var toolbar = document.createElement("div");
  toolbar.className = "mermaid-fullscreen-toolbar";

  var state = { scale: 1, tx: 0, ty: 0, panning: false };

  var btnZoomIn = btn("+", "Zoom in", function () {
    state.scale = Math.min(state.scale * 1.3, 5);
    applyFsTransform(container, state);
  });
  var btnZoomOut = btn("\u2212", "Zoom out", function () {
    state.scale = Math.max(state.scale / 1.3, 0.2);
    applyFsTransform(container, state);
  });
  var btnReset = btn("\u21ba", "Reset", function () {
    state.scale = 1;
    state.tx = 0;
    state.ty = 0;
    applyFsTransform(container, state);
  });
  var btnClose = btn("\u2715", "Close", function () {
    document.body.removeChild(overlay);
    document.body.style.overflow = "";
  });
  btnClose.classList.add("mermaid-btn-close");

  toolbar.appendChild(btnZoomIn);
  toolbar.appendChild(btnZoomOut);
  toolbar.appendChild(btnReset);
  toolbar.appendChild(btnClose);

  var container = document.createElement("div");
  container.className = "mermaid mermaid-fullscreen-content";
  container.textContent = source;
  container.style.cursor = "grab";

  overlay.appendChild(toolbar);
  overlay.appendChild(container);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  mermaid.run({ nodes: [container] }).then(function () {
    container.setAttribute("data-mermaid-source", source);
  });

  // Pan
  container.addEventListener("mousedown", function (e) {
    state.panning = true;
    state.startX = e.clientX - state.tx;
    state.startY = e.clientY - state.ty;
    container.style.cursor = "grabbing";
    e.preventDefault();
  });
  overlay.addEventListener("mousemove", function (e) {
    if (!state.panning) return;
    state.tx = e.clientX - state.startX;
    state.ty = e.clientY - state.startY;
    applyFsTransform(container, state);
  });
  overlay.addEventListener("mouseup", function () {
    state.panning = false;
    container.style.cursor = "grab";
  });

  // Scroll zoom
  container.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      state.scale = Math.min(Math.max(state.scale * factor, 0.2), 5);
      applyFsTransform(container, state);
    },
    { passive: false },
  );

  // Escape to close
  overlay.addEventListener("keydown", function (e) {
    if (e.key === "Escape") btnClose.click();
  });
  overlay.setAttribute("tabindex", "0");
  overlay.focus();
}

function applyFsTransform(el, state) {
  el.style.transform =
    "translate(" +
    state.tx +
    "px, " +
    state.ty +
    "px) scale(" +
    state.scale +
    ")";
}

/* ── Init ── */

document.addEventListener("DOMContentLoaded", initMermaid);

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (m) {
    if (m.attributeName === "data-md-color-scheme") {
      initMermaid();
    }
  });
});

observer.observe(document.body, { attributes: true });
