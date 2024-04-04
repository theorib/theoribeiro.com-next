export function scrollToElement(element: HTMLElement): void {
  const rect = element.getBoundingClientRect();
  const elementCenter =
    rect.top + window.pageYOffset - window.innerHeight / 2 + rect.height / 2;

  window.scrollTo({
    top: elementCenter,
    behavior: 'smooth',
  });
}
