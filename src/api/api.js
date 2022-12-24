import Axios from "axios"
import React from "react"



export const instance = Axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "b33b81b5-525e-46c5-8902-af7ffb56425d"
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(Response => Response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method plese use profileApi')
        return profileApi.getProfile(userId)
    }
}
export const profileApi = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me/')
    },
    login(email,password,rememberMe = false) {
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}