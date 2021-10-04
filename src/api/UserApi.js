import { axiosClient } from './axiosClient';
const UserApi = {

    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.remove(url);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.update(url, data);
    },
   
    signup(user) {
        console.log(user)
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    signin(body) {
        const url = `/signin`;
        return axiosClient.post(url, body);
    },
    signout() {
        const url = `/signout`;
        return axiosClient.get(url);
    }


}
export default UserApi;