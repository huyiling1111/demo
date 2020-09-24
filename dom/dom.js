window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(node, key, value) {
        node.style[key] = value

    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn(nodes[i])
        }
    }
}