export interface User {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    userpassword: string
}

export interface SubmitUser {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    userpassword: string
}
