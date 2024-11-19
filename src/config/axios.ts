import axios from 'axios'


class Requests {
    static async get<T>(url: string): Promise<T> {
        axios.defaults.baseURL = 'localhost'
        const result: T = await axios.get<T>(url).then(res => {
            return res.data
        })
        return result
    }

    static async post<T, R>(url: string): Promise<R> {
        const result: R = await axios.post<T, R>(url)
        return result
    }
}

export default Requests