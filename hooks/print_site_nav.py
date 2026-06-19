try:
    from mkdocs.plugins import event_priority
except ImportError:
    event_priority = lambda priority: lambda func: func


PRINT_SECTION_TITLE = "Projectstartarchitectuur"


def get_print_site_plugin(config):
    plugins = config.get("plugins")

    if hasattr(plugins, "get"):
        return plugins.get("print-site")

    return dict(plugins).get("print-site")


@event_priority(-100)
def on_nav(nav, config, files, **kwargs):
    """
    Laat de normale site-navigatie intact, maar geef mkdocs-print-site-plugin
    alleen de pagina's onder 'Projectstartarchitectuur' mee.
    """

    print_site = get_print_site_plugin(config)

    if not print_site or not hasattr(print_site, "renderer"):
        return nav

    for item in nav.items:
        if getattr(item, "title", None) == PRINT_SECTION_TITLE:
            children = getattr(item, "children", None)

            if children:
                print_site.renderer.items = children

            break

    return nav
