export interface LoginBody {
    username: string;
    password: string;
}

export interface LoginOrRegisterResponse {
    readonly username?: string
    readonly statusCode?: number
    readonly error: boolean
}

export interface RegisterBody {
    username: string;
    email: string;
    password: string;
    age: string;
}

export interface MyInformationResponse {
    readonly information?: MyInformation;
    readonly error: boolean;
}

export interface BasicResponse {
    readonly error: boolean;
}

export interface UsersList {
    readonly list?: MyInformation[];
    readonly error: boolean;
}

export interface MyInformation {
    readonly username: string;
    readonly user_mail: string;
    readonly age: string;
    readonly instagram?: string | null;
    readonly twitter?: string | null;
}
