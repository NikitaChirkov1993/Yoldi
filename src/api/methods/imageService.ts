export class ImageService {
    postImage = async (file) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/image`, {
                method: "POST",
                body: file,


            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    getImage = async (id) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/image/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
