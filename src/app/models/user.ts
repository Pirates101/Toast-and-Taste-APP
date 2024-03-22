export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    userPassword: string
}

export interface SubmitUser {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    userPassword: string
}
