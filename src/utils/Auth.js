const baseUrl = 'https://untiwedev.ru';

export const register = (login, password) => {
    return fetch(`${baseUrl}/api/Auth/RgisterNewUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export const authorize = (login, password) => {
    return fetch(`${baseUrl}/api/Auth/Login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password })
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export const getContent = (token) => {
    return fetch(`${baseUrl}/api/Todo/GetListTodoUser`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}