import API from './API'

export default {
    getPost() {
        return API().get('/posts')
    }
}