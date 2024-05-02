export interface LoginBody {
    user_name: string;
    password: string;
}

export interface LoginOrRegisterResponse {
    readonly username?: string;
    readonly error: boolean;
}

export interface RegisterBody {
    username: string;
    user_mail: string;
    password: string;
    age: string;
    instagram?: string | null;
    twitter?: string | null;
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
