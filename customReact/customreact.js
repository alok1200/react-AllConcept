// there are creating a element in the dom (element) and adding the properties to it
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type); // creating that element in dom
  domElement.innerHtml = reactElement.children; // adding the children to the element
  domElement.setAttribute("href", reactElement.prop.href); // creating the attribute
  domElement.setAttribute("tergatt", reactElement.prop.tergate); // creating the attribute

  container.appendChild(domeElement); // adding the element to the container
}

const reactElement = {
  type: "a",
  prop: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");
