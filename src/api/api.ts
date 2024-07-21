import { AuthService } from "./methods/authService";
import { UserService } from "./methods/userService";

export const api = {
    users: new UserService(),
    auth: new AuthService(),
};
