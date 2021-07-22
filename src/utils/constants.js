const CONST = {
    BASE_URL: 'http://localhost:3000/api',
    DEFAULT_RECRUITER_STATS: [
        {
            title: "Jobs Posted",
            value: 0,
        },
        {
            title: "Vacancies",
            value: 0,
        },
        {
            title: "In Progress",
            value: 0,
        },
    ],
    USER_URL: {
        LOGIN: '/auth/login',
        VERIFY: '/auth/verify-otp',
        RESEND_OTP: '/auth/resend-verify-otp',
        REGISTER: '/auth/register',
        GET_USER: '/auth/getUser'
    },
    JOB_URL: {
        JOB_LIST: '/job/joblist',
        ADD_JOB: '/job/addjob',
        JOB_BY_ID: '/job/jobById/',
        JOB_APPLY: '/job/applyForJob'
    },
    JOB_ACTION_URL: {
        SCHEDULE: '/job/scheduleInterview',
        OFFER: '/job/sendOfferLetter',
        REGRET: '/job/sendRegretLetter'
    },
    STATIC_DATA_URL: {
        CITIES: '/masterdata/cities',
        SKILLS: '/masterdata/skills',
        ROLES: '/masterdata/jobRoles'
    },
    ON_BOARD_URL: {
        RECRUITER: '/onBoard/recruiter',
        JOBSEEKER: '/onBoard/jobSeeker'
    },
    FILE_UPLOAD_URL: '/uploads'
}
export default CONST;