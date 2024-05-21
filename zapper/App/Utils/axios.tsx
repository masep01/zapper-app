import axios from 'axios';
import {
    LoginBody,
    LoginOrRegisterResponse,
    RegisterBody,
    MyInformationResponse,
    BasicResponse,
    LocationResponse,
    MyInformation,
} from './responsesTypes';

type UserProfile = {
    instagram: string;
    twitter: string;
}
  
type NearUser = {
    location: {
        type: string;
        coordinates: [number, number];
    };
    profiles: UserProfile;
    username: string;
    age: number;
}

type UsersList = {
    list?: NearUser[];
    error: boolean;
};
  

const baseURL = 'https://gloom.fib.upc.edu/api';
//const baseURL = 'http://192.168.1.69:8080/api'

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
        return { username: userName, statusCode: response.status, error: false};
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
            method: 'post',
            url: `${baseURL}/getUserInfo`,
            data: { username },
        });
        const userInfo = response.data.userInfo;
        const information: MyInformation = {
            username: userInfo.username,
            age: userInfo.age.toString(), 
            email: userInfo.email, 
            instagram: userInfo.profiles?.instagram || null,
            twitter: userInfo.profiles?.twitter || null
        };

        return { information, error: false };
    } catch (error) {
        return { error: true };
    }
}

export async function getNearUsers(username: string): Promise<UsersList> {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}/getNearUsers`,
            data:  {
                username
            },
        });
        const transformedList = response.data.nearUsers.map((user: NearUser) => ({
            name: user.username,
            location: {
                latitude: user.location.coordinates[1],
                longitude: user.location.coordinates[0]
            },
            age: user.age,
            insta: user.profiles.instagram || " ",
            twitter: user.profiles.twitter || " "
        }));
        return { list: transformedList, error: false };
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
            method: 'post',
            url: `${baseURL}/updateUserInfo`,
            data: {
                username,
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
        console.log(location)
        const { longitude, latitude } = location.coords;
        console.log(longitude + " " + latitude)
        const response = await axios({
            method: 'post',
            url: `${baseURL}/updateLocation`,
            data: {
                username, 
                longitude,
                latitude,
            },
        });
        return { error: false };
    } catch (error) {
        return { error: true };
    }
}