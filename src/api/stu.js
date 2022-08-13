import { request } from 'umi'

export const stuGet = () => {
    return request('/classes/stu', {
        method: 'GET'
    })
}

export const stuDelete = (id) => {
    return request(`/classes/stu?id=${id}`, {
        method: 'DELETE'
    })
}
