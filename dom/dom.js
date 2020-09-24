window.dom = {
    find(selector,scope) {
        return (document||scope).querySelectorAll(selector)
    },
    style(node, key, value) {
        node.style[key] = value

    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn.call(null,nodes[i])
        }
    }
}
