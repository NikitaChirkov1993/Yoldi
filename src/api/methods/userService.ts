const API = 'https://frontend-test-api.yoldi.agency/api';

export class UserService {
    getUsers = async () => {
        try {
            const response = await fetch(`${API}/user`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    getUser = async (slug: string) => {
        try {
            const response = await fetch(`${API}/user/${slug}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };
}