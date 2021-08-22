import * as axios from 'axios'

let urlAPI = 'https://social-network.samuraijs.com/api/1.0';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: { 'API-KEY': '1576d960-b358-4dda-9d33-ca2e2f763bf5'}
})


export const usersAPI = {
    getUsers(activePage = 1, pageSize = 9) {
        return instance.get(urlAPI + `/users?page=${activePage}&count=${pageSize}`)
        .then(response => response.data)
    },
    deleteFollow(id){
        return instance.delete(`/follow/${id}`,)
        .then(response => response.data)
    },
    postFollow(id){
        return instance.post(`/follow/${id}`,)
        .then(response => response.data)
    }
}

export const profileAPI = {
    getUserData(userId){
        return instance.get(`/profile/${userId}`)
        .then(response => response.data)
    },
    getUserStatus(userId){
        return instance.get(`/profile/status/${userId}`)
        .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`/profile/status`, {status: status})
        .then(response => response.data)
    }
}

export const headerAPI = {
    getAuth(){
        return instance.get(`/auth/me`)
        .then(response => response.data)
    }
}