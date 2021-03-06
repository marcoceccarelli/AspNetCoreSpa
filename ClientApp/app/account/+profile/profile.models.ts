export interface UserInfoModel {
    firstName: string;
    lastName: string;
}

export interface UpdatePasswordModel {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}
