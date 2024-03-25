export function getComputedStyleProperty(node: HTMLDivElement, propertyName: string) {
  // https://caniuse.com/mdn-api_element_computedstylemap
  if (node.computedStyleMap) {
    return (node.computedStyleMap().get(propertyName) as CSSUnitValue)?.value;
  } else {
    return parseInt(getComputedStyle(node).getPropertyValue(propertyName), 10);
  }
}
