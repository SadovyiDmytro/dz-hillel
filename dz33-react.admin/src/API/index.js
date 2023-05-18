export const getOrders = () => {
    return fetch('https://dummyjson.com/carts/1').then(response => response.json());
}

export const getUsers = () => {
    return fetch('https://dummyjson.com/users').then(response => response.json());
}
