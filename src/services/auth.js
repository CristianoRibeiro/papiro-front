export const TOKEN_KEY = "@papiro-Token";
export const ID_USUARIO = "@papiro-idUsuario";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null ;
export const getToken = () => localStorage.getItem(TOKEN_KEY);


export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const IdUsuario = id => {
  localStorage.setItem(ID_USUARIO, id);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


export const getIdUsuario = () => localStorage.getItem(ID_USUARIO);
