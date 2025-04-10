export interface UserData {
    email: string;
    password: string;
    name: string;
}

export interface UserResponse {
    id: string;
    email: string;
    is_active: boolean;
}

export interface VerificationCode {
    code: string;
}

export interface VerifiedUserResponse extends UserResponse {
    access_token: string;
    refresh_token: string;
}
export interface AuthCheckResponse {
    message: string;
}