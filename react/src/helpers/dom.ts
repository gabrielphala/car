export const get1ByClass = (className: string) => {
  const els = document.getElementsByClassName(className);

  return els ? els[0] : null;
};

export const getValueById = (id: string) => {
  return (document.getElementById(id) as HTMLInputElement)?.value;
};

export const getElementById = (id: string) => {
  return document.getElementById(id) as HTMLInputElement | HTMLElement;
};

export const $cls = (cls: string, parent?: HTMLElement) => {
  return parent ? parent.getElementsByClassName(cls) : document.getElementsByClassName(cls);
}