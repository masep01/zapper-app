// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import sha256 from 'sha256';
import {
    LoginBody,
    LoginOrRegisterResponse,
    RegisterBody,
    MyInformationResponse,
    UsersList,
    BasicResponse, LocationResponse,
} from './responsesTypes';

const baseURL = 'http://zubat.fib.upc.edu:32334/api';
//const baseURL = 'http://localhost:8080/api'
export async function login(userName: string, password: string): Promise<LoginOrRegisterResponse> {
    const data: LoginBody = {
        username: userName,
        password: password,
    };

    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}/login`,
            data: data,
        });
        return { username: response.data.username, statusCode: response.status, error: false};
    } catch (error) {
        if (error.response) return { error: true, statusCode: error.response.status };
        else return { error: true };
    
    }
}

export async function register(
    username: string,
    password: string,
    email: string,
    age: string,
    instagram?: string,
    twitter?: string,
):
    Promise<LoginOrRegisterResponse> {
    const data: RegisterBody = {
        username,
        password,
        email,
        age,
        instagram,
        twitter,
    };

    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}/register`,
            data,
        });
        return { username: response.data.username, statusCode: response.status, error: false };
    } catch (error) {
        if (error.response) return { error: true, statusCode: error.response.status };
        else return { error: true };
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

        return { list: [...response.data.username], error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function updateUserInformation(
    username: string,
    email: string,
    instagram: string,
    twitter: string,
): Promise<BasicResponse> {
    try {
        const response = await axios({
            method: 'put',
            url: `${baseURL}/updateUserInfo`,
            headers: { username },
            data: {
                email,
                instagram,
                twitter,
            },
        });
        return { error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function updateLocation(
    username: string,
    location: LocationResponse,
): Promise<BasicResponse>{
    try {
        const response = await axios({
            method: 'put',
            url: `${baseURL}/updateLocation`,
            headers: { username },
            data: {
                location,
            },
        });
        return { error: false };
    } catch (error) {
        return { error: true };
    }
}