window.dom = {
    find(selector, scope) {
        return (document || scope).querySelectorAll(selector)
    },
    style(node, key, value) {
        node.style[key] = value

    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn.call(null, nodes[i])
        }
    },
    creat(string) {
         //用template是因为这个标签里可以容纳所有标签，
         //div标签里就不能放<tr></tr>标签，而template可以
        let container = document.createElement('template')
        container.innerHTML = string.trim()
        //用trim()去掉多余的空格
        return container.content.firstChild
        //一定要这样写container.content.firstChild
    },
    after(node, newNode) {
        // 目标是在Node节点后面插入node2节点
        // 但是DOM只提供了insertBefore接口
        // 1 -> 3
        // 在1后面插入2, 等价于在3的前面插入2
        // 所以我们转换为在node的下一个节点的前面插入node2
        node.parentNode.insertBefore(newNode, node.nextSibling,)
       

    },
    before(node, newNode) {
        node.parentNode.insertBefore(newNode, node)
        //已有的子节点前插入一个新的子节点
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    swap(node, newParent) {
         // 把Newparent 放到node前面
        // 把node append到newparent里
        // 目标: div1
        //        ↓----> div2
        // 变成  div1
        //        ↓----> div3
        //                ↓----> div2
        // 先把div3 放到div2的前面，再div3.appendChild(div2)
        node.before.call(null, node, newParent)
        newParent.append(node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
     // empty 把所有子节点删掉
    // 坑：childNodes.length每次的Length会变化
    empty(node) {
        // const {childNodes} = node 等价于const childNodes = node.childNodes
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {//重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },

    text(node, string) { // 适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}
