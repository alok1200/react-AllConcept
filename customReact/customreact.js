//  hear is a function that takes a react element and a container as arguments and renders the react element inside the container

function customRender(reactElement, container) {
  //   // function to render react element
  //   const domElement = document.createElement(reactElement.type); // create a dom element
  //   domElement.textContent = reactElement.children; // set the text content
  //   domElement.setAttribute("href", reactElement.prop.href); // set the href attribute
  //   domElement.setAttribute("target", reactElement.prop.target); // set the target attribute
  //   container.appendChild(domElement); // append the dom element to the container
  //    this are the older way of dowing things

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
