export const TOKEN_KEY = "@papiro-Token";
export const ID_USUARIO = "@papiro-idUsuario";
export const NOME_USUARIO = "@papiro-nomeUsuario";
export const CD_TIPO_USUARIO = "@papiro-CdTipoUsuario";
export const CD_PESSOA = "@papiro-CdPessoa";
export const PONTUACAO="@papiro-Pontuacao"



export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null ;
export const getToken = () => localStorage.getItem(TOKEN_KEY);


export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const IdUsuario = id => {
  localStorage.setItem(ID_USUARIO, id);
};

export const nomeUsuario = nome => {
  localStorage.setItem(NOME_USUARIO, nome);
};

export const pontuacaoUsuario=pontuacao=>{
  localStorage.setItem(PONTUACAO,pontuacao);
}

export const tipoUsuario = id => {
  localStorage.setItem(CD_TIPO_USUARIO, id);
};

export const pessoa = id => {
  localStorage.setItem(CD_PESSOA, id);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


export const getIdUsuario = () => localStorage.getItem(ID_USUARIO);
export const getNomeUsuario = () => localStorage.getItem(NOME_USUARIO);
export const getTipoUsuario = () => localStorage.getItem(CD_TIPO_USUARIO);
export const getPessoa = () => localStorage.getItem(CD_PESSOA);
export const getPontuacao=()=>localStorage.getItem(PONTUACAO);
