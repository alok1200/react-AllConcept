function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  domElement.setAttribute("href", reactElement.prop.href);
  domElement.setAttribute("target", reactElement.prop.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  prop: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
