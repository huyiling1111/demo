window.jquery = function (selectorOrArrayOrTemplate) {
    let elements;
    if (typeof selectorOrArrayOrTemplate === "string") {
        if (selectorOrArrayOrTemplate[0] === "<") {
            // 创建 div
            elements = [createElement(selectorOrArrayOrTemplate)];
        } else {
            // 查找 div
            elements = document.querySelectorAll(selectorOrArrayOrTemplate);
        }
    } else if (selectorOrArrayOrTemplate instanceof Array) {
        elements = selectorOrArrayOrTemplate;
    }

    function createElement(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        console.log(container.innerHTML)
        return container.content.firstChild;
    }
    // console.dir(elements)
    return {
        oldapi: selectorOrArrayOrTemplate.oldapi,
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                let elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }

            array.oldapi = this
            return jquery(array)
            //目的是返回新的api，新的elements值
        },
        end() {
            return this.oldapi
            //返回到旧的的api

        },

        appendTo(node) {
            if (node instanceof Element) {
                this.each(el => node.appendChild(el));
            } else if (node.jquery === true) {
                this.each(el => node.get(0).appendChild(el));
            }
        },
        append(children) {
            if (children instanceof Element) {
                this.get(0).appendChild(children);
            } else if (children instanceof HTMLCollection) {
                for (let i = 0; i < children.length; i++) {
                    this.get(0).appendChild(children[i]);
                }
            } else if (children.jquery === true) {
                children.each(node => this.get(0).appendChild(node));
            }
        },
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
                // console.log(elements[i].classList)
            }
            return this
        },

        parent() {
            let array = []
            this.each(node => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            }
            )
            return jquery(array)
            //目的是返回新的api，新的elements值
        },
        print() {
            console.log(elements)
        },
        child() {
            let array = []
            this.each(node => {
                array.push(...node.children)
            }

            )
            return jquery(array)
        },

        //退回到array.oldapi指向的api
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i])
            }
            return this
        },
        //对elements遍历 然后传入fn函数

    }

}