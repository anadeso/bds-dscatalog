import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

type LoginResponse = {
    access_token: string,
    token_type: string
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const tokenKey = 'authData'; 

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

// criar funcao para auxiliar na geracao do codigo
const basicHeader = () => 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);

// funcao para requisicao de login 
type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData : LoginData) => {
    // cabecalho (headers)
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: basicHeader()
    }

    // corpo requisicao (body)
    const data = qs.stringify( {
        ...loginData,
        grant_type: 'password'
    });

    // retornar axios
    return axios({
        method: 'POST', 
        baseURL: BASE_URL, 
        url: '/oauth/token', 
        data,
        headers
    });
}

export const requestBackend = (config : AxiosRequestConfig) => {
    return axios({...config, baseURL: BASE_URL});
}

export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";

    // convertendo string para objeto
    return JSON.parse(str) as LoginResponse;
}
 
