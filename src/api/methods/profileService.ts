export class ProfileService {
    getProfile = async (value) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/profile`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'X-API-KEY': `${value}`
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }

    };

    patchProfile = async (value,body) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/profile`, {
                method: "PATCH",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'X-API-KEY': `${value}`
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}