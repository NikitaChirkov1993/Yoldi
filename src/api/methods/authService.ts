const API = 'https://frontend-test-api.yoldi.agency/api';

export class AuthService {
    getUsers = async () => {
        try {
            const response = await fetch(`${API}/user`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    getUser = async (params: {slug: string}) => {
        try {
            const response = await fetch(`${API}/user/${params.slug}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };
}