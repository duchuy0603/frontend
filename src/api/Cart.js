import { axiosClient } from './axiosClient';

const CartApi = {
    getAll() {
        const url = `/cart`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/cart/${id}`;
        return axiosClient.get(url);
    },
    add(cart) {
        const url = `/cart`;
    
        return axiosClient.post(url, cart);
    },
    remove(id) {
        const url = `/cart/${id}`;
        return axiosClient.delete(url);
    },
    remove() {
        const url = `/cart`;
        return axiosClient.delete(url);
    },
    // update(id,userId, category) {
    //     const url = `/categories/${id}/${userId}`;
    //     return axiosClient.put(url, category);
    // }


}
// add(categories,userId) {
//     const url = `/categories/${userId}`;
//     return axiosClient.post(url, categories);
// },
// remove(id,userId) {
//     const url = `/categories/${id}/${userId}`;
//     return axiosClient.delete(url);
// },
// update(id, data,userId) {
//     const url = `/categories/${id}/${userId}`;
//     return axiosClient.put(url, data);
// }
export default CartApi;