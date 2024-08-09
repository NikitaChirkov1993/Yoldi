import { AuthService } from "./methods/authService";
import { ImageService } from "./methods/imageService";
import { ProfileService } from "./methods/profileService";
import { UserService } from "./methods/userService";

export const api = {
    users: new UserService(),
    auth: new AuthService(),
    profile: new ProfileService(),
    image: new ImageService(),
};
