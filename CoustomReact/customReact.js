
/* How to React work behind the seen */

const showElement = document.getElementById("root");
const reactElement = {
    type : "h3",
    props : {
        class: "coustomClass",
        id : "head"
    },
    children : "This is my custom hading in react"
}
function customRender (reactElement,showElement) {
    const domElement = document.createElement(reactElement.type);
    for (props in reactElement.props) {
        domElement.setAttribute(props,reactElement.props[props]);
    }
    domElement.innerHTML = reactElement.children;
    showElement.appendChild(domElement)
}
customRender(reactElement,showElement)




