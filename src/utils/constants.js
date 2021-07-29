const CONST = {
  BASE_URL: "http://localhost:3000/api",
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
  DEFAULT_JOBSEEKER_STATS: [
    {
      title: "Applied Jobs",
      value: 0,
    },
    {
      title: "Saved Jobs",
      value: 0,
    },
    {
      title: "Ongoing",
      value: 0,
    },
    {
      title: "Offers",
      value: 0,
    },
  ],
  USER_URL: {
    LOGIN: "/auth/login",
    VERIFY: "/auth/verify-otp",
    RESEND_OTP: "/auth/resend-verify-otp",
    REGISTER: "/auth/register",
    GET_USER: "/user/getUser",
    SAVE_JOBSEEKER: "/user/jobseeker/saveProfile",
    SAVE_RECRUITER: "/user/recruiter/saveProfile",
  },
  JOB_URL: {
    ALL_JOB_LIST: "/job",
    JOB_LIST: "/job/joblist",
    ADD_JOB: "/job/addjob",
    JOB_BY_ID: "/job/jobById/",
    JOB_APPLY: "/job/applyForJob",
    JOB_APPLICANT: "/job/jobApplicants",
  },
  JOB_ACTION_URL: {
    SCHEDULE: "/job/scheduleInterview",
    OFFER: "/job/sendOfferLetter",
    REGRET: "/job/sendRegretLetter",
  },
  FILE_UPLOAD_URL: "/files/upload",
};
export default CONST;
