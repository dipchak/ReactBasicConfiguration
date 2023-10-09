import Axios from 'axios'

const axios = Axios.create({ baseURL: `https://blgui-devapi.wgtechnologiespvtltd.com` })

axios.interceptors.request.use(config => {
    let token = localStorage.getItem('authtoken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    Promise.reject(error)
})

export default axios