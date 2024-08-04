
export class AuthService {
    register = async (args) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/auth/sign-up`, {
                method: "POST",
                body: JSON.stringify(args),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    login = async (args) => {
        try {
            const response = await fetch(`https://frontend-test-api.yoldi.agency/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(args),
            });
            const data = await response.json();
            console.log(data, 'data');
            return data;
        } catch (e) {
            console.log(e);
        }
    };
}

// fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {    появилось ID??????
//     method: "PATCH",
//     body: JSON.stringify({ done: todoItem.done }),
//     headers: {
//         "Content-Type": "application/json",
//     }
// });