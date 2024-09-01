export const cutstr = (str: string) => {
  console.log(window.innerWidth);
  
  if (str.length <= 18 || window.innerWidth > 425)
      return str;

  return `${str.slice(0, 18)}...`;
}