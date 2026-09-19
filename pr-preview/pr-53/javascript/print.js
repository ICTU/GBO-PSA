function downloadPDF(url) {
    if (!url) return;

    const printWindow = window.open(url, "_blank");

    if (!printWindow) {
        alert("Pop-up geblokkeerd! Sta pop-ups toe voor deze site.");
        return;
    }

    function waitForPrintToc(win, timeoutMs) {
        return new Promise(function (resolve) {
            const start = Date.now();

            function check() {
                const doc = win.document;
                const tocContainer = doc.querySelector("#print-page-toc");
                const tocItems = doc.querySelectorAll("#print-page-toc nav li");

                if (!tocContainer || tocItems.length > 0 || Date.now() - start > timeoutMs) {
                    resolve();
                    return;
                }

                setTimeout(check, 100);
            }

            check();
        });
    }

    printWindow.onload = async function () {
        await waitForPrintToc(printWindow, 3000);

        setTimeout(function () {
            printWindow.print();
            printWindow.close();
        }, 500);
    };
}
