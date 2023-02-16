import axios from "axios";
import config from "./config.js";

export const HTTP = axios.create({
    baseURL: config.MOCK
});

export default{
    async getUsers() {
        try {
            const response = await HTTP.get('/users')
            return response.data
        } catch (e) {
            console.log(e);
        }
    },

    async getUser(id) {
        try {
            const response = await HTTP.get(`/users/${id}`, {
                headers: {
                    Prefer: `code=200, example=Example ${id}`
                }
            })
            return response.data
        } catch (e) {
            console.log(e);
        }
    },

    async postUser(newUser) {
        try {
            const response = await HTTP.post('/users', newUser)
            return response.data
        } catch (e) {
            console.log(e);
        }
    }

}