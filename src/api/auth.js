import API from '../utils/API';

export const loginApi = (data) => {
    const result = API({
        method: 'post',
        url: '/auth/login',
        data
    })

    return result;
}

export const registerApi = (data) => {
    const result = API({
        method: 'post',
        url: '/auth/register',
        data
    })

    return result;
}

export const verifyOTPApi = (data) => {
    const result = API({
        method: 'post',
        url: '/auth/verify-otp',
        data
    })

    return result;
}

export const resendOTPApi = (data) => {
    const result = API({
        method: 'post',
        url: '/auth/resend-verify-otp',
        data
    })

    return result;
}
