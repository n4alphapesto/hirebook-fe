import API from '../utils/API';

export const uploadFileApi = (data) => {
    const result = API({
        method: 'post',
        url: '/files/upload',
        data
    })

    return result;
}
