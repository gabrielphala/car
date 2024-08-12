import axios from "axios";

const session = new Map();

const headers: any = {
  "Content-Type": "application/json;charset=utf-8",
};

export const BASEURL = () => {
  return ['5173', '5174'].includes(location.port) ?
    'http://localhost:3132' :
    ''
}

export const getCookieValue = (name: string) =>
  document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";

export const post = async (url: string, options: any) => {
  const res = await fetch(`${BASEURL()}${url}`, {
    method: "POST",
    body: JSON.stringify(options.body),
    headers: options.headers,
    credentials: options.credentials ? "include" : undefined,
  });

  return await res.json();
};

export const postWithAuth = async (
  url: string,
  body: any,
  credentials = false
) => {
  const newHeaders = { ...headers };
  newHeaders["Authorization"] = `Bearer ${getCookieValue("_cah_sesh")}`;

  return post(url, { body, headers: newHeaders, credentials });
};

export const postWithNoAuth = async (
  url: string,
  body: any,
  credentials = false
) => {
  return post(url, { body, headers, credentials });
};

export const postWithAxios = async (url: string, body: any, options?: any) => {
  const res = await axios.post(`${BASEURL()}${url}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookieValue("_cah_sesh")}`,
    },
    onUploadProgress: options?.progress,
    withCredentials: options?.credentials || false
  });

  return res.data;
};

export const getUserBySession = async () => {
  let user = session.get("user");

  if (!user) {
    const res = await postWithAuth("/user/get/session", {});

    session.set("user", res.user);

    user = res.user;
  }

  return user;
};

export const rememberUser = async (user: any) => {
  session.set("user", user);
};
