function convertToHtml(virtualNode) {
  if (typeof virtualNode === "string" || typeof virtualNode === "number") {
    return document.createTextNode(`${virtualNode}`);
  }

  const $domElement = document.createElement(virtualNode.tagName);

  virtualNode.props.children.forEach((virtualChild) => {
    $domElement.appendChild(convertToHtml(virtualChild));
  });

  return $domElement;
}

function render(initialVirtualTree, $domRoot) {
  const $appHTML = convertToHtml(initialVirtualTree);
  $domRoot.appendChild($appHTML);
}

function createElement(elementType, props, ...children) {
  const virtualElementProps = {
    ...props,
    children,
  };

  if (typeof elementType === "function") {
    return elementType(virtualElementProps);
  }

  return {
    tagName: elementType,
    props: virtualElementProps,
  };
}

const React = {
  createElement,
  render,
};

export default React;
