// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import sha256 from 'sha256';
import {
    LoginBody,
    LoginOrRegisterResponse,
    RegisterBody,
    MyInformationResponse,
    UsersList,
    BasicResponse,
} from './responsesTypes';

const baseURL = 'http://localhost:8080/api/user';

export async function login(username: string, password: string): Promise<LoginOrRegisterResponse> {
    const hash = sha256(password);
    const data: LoginBody = {
        user_name: username,
        password: hash,
    };

    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}/login`,
            data,
        });
        return { token: response.data.token, error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function register(
    username: string,
    password: string,
    email: string,
    age: string,
    instagram: string,
    twitter: string,
    
):
    Promise<LoginOrRegisterResponse> {
    const hash = sha256(password);
    const data: RegisterBody = {
        username,
        user_mail: email,
        age,
        password: hash,
        instagram,
        twitter,
    };

    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}/register`,
            data,
        });
        return { token: response.data.user_name, error: false };
    } catch (error) {
        if (error.response) {

            // The server responded with a status code outside the 2xx range
      
            console.log('Error response:', error.response);
      
          } else if (error.request) {
      
            // The request was made but no response was received
      
            console.log('Error request:', error.request);
      
          } else {
      
            // Something happened in setting up the request that triggered an error
      
            console.log('Error message:', error.message);
      
          } //borrar
        return { error: true };
    }
}

export async function getUserInformation(username: string): Promise<MyInformationResponse> {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}/getUserInfo`,
            headers: { username },
        });
        return { information: { ...response.data.user}, error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function getNearUsers(username: string): Promise<UsersList> {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}/getNearUsers`,
            headers: { username },
        });

        return { list: [...response.data.user_name], error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function updateUserInformation(
    username: string,
    email: string,
    instagram: string,
    twitter: string,
): Promise<MyInformationResponse> {
    try {
        const response = await axios({
            method: 'put',
            url: `${baseURL}/users`,
            headers: { username },
            data: {
                email,
                instagram,
                twitter,
            },
        });
        return { information: { ...response.data.user }, error: false };
    } catch (error) {
        return { error: true };
    }
}