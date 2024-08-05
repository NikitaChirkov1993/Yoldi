import { AuthService } from "./methods/authService";
import { ProfileService } from "./methods/profileService";
import { UserService } from "./methods/userService";

export const api = {
    users: new UserService(),
    auth: new AuthService(),
    profile: new ProfileService(),
};
