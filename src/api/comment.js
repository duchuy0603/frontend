import { axiosClient } from './axiosClient';

const CommentApi = {
    getAll() {
        const url = `/comment`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/comment/${id}`;
        return axiosClient.get(url);
    },
    // add(product, token) {
    //     const useradd = sessionStorage.getItem('user');
    //     var auth = JSON.parse(useradd)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${userId}`;
    //     return axiosClient.post(url, product, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // },
    add(comment) {
    

        const url = `/comment`;
        return axiosClient.post(url, comment);
    },
    // remove(id, token) {
    //     const userUpdate = sessionStorage.getItem('user');
    //     var auth = JSON.parse(userUpdate)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${id}/${userId}`;
    //     return axiosClient.delete(url, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // },
    remove(id,userId) {
        const url = `/comment/${id}/${userId}`;
        return axiosClient.delete(url);
    },
    removeAll(userId) {
        const url = `/comment/${userId}`;
        return axiosClient.delete(url);
    },
    // update(id, product, token) {
    //     const userUpdate = sessionStorage.getItem('user');
    //     var auth = JSON.parse(userUpdate)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${id}/${userId}`;
    //     return axiosClient.put(url, product, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // }
    update(id,userId ,comment) {   
        const url = `/comment/${id}/${userId }`;
        return axiosClient.put(url, comment);
    }
}
export default CommentApi;