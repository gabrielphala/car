import { getElementById, $cls } from "./dom"

export const showError = (id: string, err: string) => {
  const parent = getElementById(`${id}-error`);

  if (!parent) return;

  let con = $cls('error-msg', parent)[0]

  if (con) con.innerHTML = err
  
  parent.classList.remove('hide')
}

export const hideError = (parent: string) => {
  getElementById(`${parent}-error`)?.classList.add('hide')
}