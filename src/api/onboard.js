import API from '../utils/API';

export const onboardJobseekerApi = (data) => {
    const token = localStorage.getItem("token");
    const result = API({
        method: 'post',
        url: '/onBoard/jobSeeker',
        data
    })

    return result;
}


export const onboardRecruiterApi = (data) => {
    const result = API({
        method: 'post',
        url: '/onBoard/recruiter',
        data
    })

    return result;
}