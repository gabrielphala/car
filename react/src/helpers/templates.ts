export const resizeTemplate = (parent: HTMLElement) => {
  const template = parent.getElementsByTagName("div")[0] as HTMLElement;

  let parentHeight = parent.offsetHeight;
  let templateHeight = parentHeight - parentHeight * 0.1; // reduce by 10%

  template.style.height = `${templateHeight}px`;
  template.style.width = `${templateHeight / 1.41}px`;
};

export const resizeTemplateByWidth = (parent: HTMLElement) => {
  const template = parent.getElementsByTagName("div")[0] as HTMLElement;

  let parentWidth = parent.offsetWidth;
  let templateWidth = parentWidth - parentWidth * 0.1; // reduce by 10%

  template.style.height = `${templateWidth * 1.41}px`;
};
