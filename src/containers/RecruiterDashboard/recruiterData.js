import oracle from "../../assets/svg/oracle.svg";
import companyPhoto1 from "../../assets/images/companyPhotos/companyPhoto1.jpg";
import companyPhoto2 from "../../assets/images/companyPhotos/companyPhoto2.JPG";
import companyPhoto3 from "../../assets/images/companyPhotos/companyPhoto3.JPG";
import companyPhoto4 from "../../assets/images/companyPhotos/companyPhoto4.JPG";
import ashwekPawar from "../../assets/images/ashwekPawar.jpg";

const allCities = [
  { title: "Banglore" },
  { title: "Mumbai" },
  { title: "Pune" },
  { title: "Hyderabad" },
  { title: "Delhi" },
];

const FRESHER = "FRESHER";
const INTERMEDIATE = "INTERMEDIATE";
const EXPERIENCED = "EXPERIENCED";

const allSkills = [
  { expertiseLevel: FRESHER, title: "HTML" },
  { expertiseLevel: FRESHER, title: "CSS" },
  { expertiseLevel: FRESHER, title: "Javascript" },
  { expertiseLevel: FRESHER, title: "React" },
  { expertiseLevel: FRESHER, title: "React Native" },
  { expertiseLevel: FRESHER, title: "Redux" },
  { expertiseLevel: FRESHER, title: "Vue" },
  { expertiseLevel: FRESHER, title: "Angular" },
  { expertiseLevel: FRESHER, title: "Nodejs" },
  { expertiseLevel: FRESHER, title: "Python" },
  { expertiseLevel: FRESHER, title: "C++" },
  { expertiseLevel: FRESHER, title: "Java" },
  { expertiseLevel: FRESHER, title: "Kotlin" },
  { expertiseLevel: FRESHER, title: "Swift" },
  { expertiseLevel: FRESHER, title: "Flutter" },
  { expertiseLevel: FRESHER, title: "Go" },
  { expertiseLevel: FRESHER, title: "Rust" },
  { expertiseLevel: FRESHER, title: "MongoDB" },
  { expertiseLevel: FRESHER, title: "Cassandra" },
  { expertiseLevel: FRESHER, title: "SQL" },
  { expertiseLevel: FRESHER, title: "postgreSQL" },
  { expertiseLevel: FRESHER, title: "Firebase" },
  { expertiseLevel: FRESHER, title: "AWS" },
  { expertiseLevel: FRESHER, title: "GCP" },
  { expertiseLevel: FRESHER, title: "Azure" },
  { expertiseLevel: FRESHER, title: "REST API" },
  { expertiseLevel: FRESHER, title: "GraphQL" },
];

const candidateStatus = [
  { _id: { $oid: "60f12548e85b8fef99da7cc4" }, title: "Applied" },
  { _id: { $oid: "60f125a1e85b8fef99da7cc4" }, title: "Hired" },
  { _id: { $oid: "60f1260c175643239aee9316" }, title: "InProgress" },
  { _id: { $oid: "60f1260c175643239aee9316" }, title: "Rejected" },
];

const jobRoles = [
  {
    _id: { $oid: "60efbf96ee5b73d53be19b00" },
    title: "MERN Developer",
    type: "jobseeker",
  },
  {
    _id: { $oid: "60efc047ee5b73d53be19b0b" },
    title: "Backend Developer",
    type: "jobseeker",
  },
  {
    _id: { $oid: "60efc097ee5b73d53be19b0c" },
    title: "Human Resource Manager",
    type: "recruiter",
  },
  {
    _id: { $oid: "60efc0aaee5b73d53be19b0d" },
    title: "Talent Acquisition Specialist",
    type: "recruiter",
  },
];

const file = {
  _id: 1, //mongoid
  data: "base64", //base64
  createdAt: Date("7/17/2021"), //Date,
  extension: "jpg", // fileextension supported by mongodb
};

const user = {
  isOnboardingCompleted: true,
  _id: "60f3cf60655c1c1bebceb5ef",
  name: "Mahidhar Nyaypati",
  email: "aphotorush@gmail.com",
  userType: "JOBSEEKER",
  jobseeker: {
    photo: ashwekPawar,
    experienceType: "FRESHER",
    openToWork: ["banglore", "pune"],
    savedJobs: [],
    appliedJobs: [],
    notInterestedJobs: [],
    _id: "60f54f033805e048dc3c8335",
    experience: 0,
    currentRole: "10",
    skills: [
      {
        expertiseLevel: "EXPERIENCED",
        title: "java",
      },
    ],
    currentLocation: "mumbai",
    currentCTC: 33,
    noticePeriod: 2,
    resume: "60f54eff3805e048dc3c8333",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    createdAt: "2021-07-19T10:08:03.850Z",
    updatedAt: "2021-07-19T10:08:03.850Z",
    __v: 0,
  },
};

const recruiter = {
  _id: 1, // mongoid (user)
  companyName: "oracle", //String
  companyLogo: { _id: { $oid: "60f12548e85b8fef99da7cc2" }, img: oracle }, // mongoId(fileDB id)
  companyPhotos: [
    { _id: { $oid: "60f12548e85b8fef99da7cc2" }, img: companyPhoto1 },
    { _id: { $oid: "60f125a1e85b8fef99da7cc4" }, img: companyPhoto2 },
    { _id: { $oid: "60f1260c175643239aee9310" }, img: companyPhoto3 },
    { _id: { $oid: "60f1260c175643239aee9312" }, img: companyPhoto4 },
  ], // array of mongoId(fileDB ids)
  // String
  aboutCompany:
    "Oracle is the world's leading provider of business software. But you probably already knew that. With a presence in over 175 countries, we are one of the biggest technology companies on the planet. What you might not know is that we are leading a cloud revolution. We're using emerging technologies like AI, machine learning, and blockchain to solve critical real-world problems. From advancing energy efficiency to reimagining online commerce, the work we do is not only transforming the world of businessit's helping governments, powering nonprofits, and giving billions of people the tools they need to outpace change and make a difference.",
  userRole: {
    // mongoId ENUM
    HR: "HR Personnel",
    CEO: "CEO",
  },
  mobileNo: "022 - 22030903", // String
  locations: ["Bangalore", "Hyderabad", "Pune"], // array of Strings
  website: "https://www.oracle.com/index.html", // String
  linkedInProfile: "https://www.oracle.com/index.html", // String
  facebookProfile: "https://www.oracle.com/index.html", // String
  twitterProfile: "https://www.oracle.com/index.html", // String
  foundationYear: 1980, // Number
  noOfEmployees: 6000, // Number
};

const jobPost = {
  _id: 1, //mongoID
  postedBy: "oracle", // mongoId (recruiter id)
  title: "Frontend Developer", //String
  description:
    "You will collaborate with others in our development team to develop UI within a distributed computing environment. You will collaborate with others on the team to ensure systems under development are aligned with other systems our team is responsible for including security, identity, metrics and assist in the deployment of distributed systems. You will assist in supporting operations for the systems that our team owns.",
  locationsAt: ["Bangalore"], // array of String
  createdOn: "7/12/2021", //Date
  skills: ["CSS", "HTML", "Javascript", "React.js"], // array of strings
};

const users = [
  {
    isOnboardingCompleted: true,
    _id: "60f3cf60655c1c1bebceb5ef",
    name: "Ashwek Pawar",
    email: "aphotorush@gmail.com",
    userType: "JOBSEEKER",
    jobseeker: {
      photo: ashwekPawar,
      experienceType: "FRESHER",
      openToWork: ["banglore", "pune"],
      savedJobs: [],
      appliedJobs: [],
      notInterestedJobs: [],
      _id: "60f54f033805e048dc3c8335",
      experience: 0,
      currentRole: "10",
      skills: [
        {
          expertiseLevel: "EXPERIENCED",
          title: "java",
        },
      ],
      currentLocation: "mumbai",
      currentCTC: 33,
      noticePeriod: 2,
      resume: "60f54eff3805e048dc3c8333",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdAt: "2021-07-19T10:08:03.850Z",
      updatedAt: "2021-07-19T10:08:03.850Z",
      __v: 0,
    },
  },
  {
    isOnboardingCompleted: true,
    _id: "60f3cf60655c1c1bebceb5ef",
    name: "Mahidhar Nyaypati",
    email: "aphotorush@gmail.com",
    userType: "JOBSEEKER",
    jobseeker: {
      photo: ashwekPawar,
      experienceType: "FRESHER",
      openToWork: ["banglore", "pune"],
      savedJobs: [],
      appliedJobs: [],
      notInterestedJobs: [],
      _id: "60f54f033805e048dc3c8336",
      experience: 0,
      currentRole: "10",
      skills: [
        {
          expertiseLevel: "EXPERIENCED",
          title: "java",
        },
      ],
      currentLocation: "mumbai",
      currentCTC: 33,
      noticePeriod: 2,
      resume: "60f54eff3805e048dc3c8333",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdAt: "2021-07-19T10:08:03.850Z",
      updatedAt: "2021-07-19T10:08:03.850Z",
      __v: 0,
    },
  },
];

const jobs = [
  {
    _id: { $oid: "60bcffddc9068f6473ec271f" },
    applicants: ["60f54f033805e048dc3c8335", "60f54f033805e048dc3c8336"],
    title: "Front end developer",
    description: jobPost.description,
    //cost: 30,
    //owner: "ABC inc",
    //email: "avinashjsdev@gmail.com",
    skills: "JAVASCRIPT, HTML5, CSS3",
    locationsAt: [
      "60f12548e85b8fef99da7cc2",
      "60f125a1e85b8fef99da7cc4",
      "60f1260c175643239aee9310",
    ],
    date: { $date: "2021-06-06T17:03:25.000Z" },
    status: "Active",
    createdAt: { $date: "2021-06-06T17:03:25.413Z" },
    updatedAt: { $date: "2021-07-11T13:05:38.061Z" },
    __v: 0,
  },
  {
    _id: { $oid: "60bd29f597f8b080f5de6ae9" },
    applicants: ["60f54f033805e048dc3c8335", "60f54f033805e048dc3c8335"],
    title: "Another book",
    description: "Another desc",
    //cost: 10,
    //owner: "Infosys",
    //email: "a0k02lf@gmail.com",
    skills: "HTML5 CSS3",
    locationsAt: [allCities[0], allCities[1], allCities[2]],
    date: { $date: "2021-06-06T20:03:01.000Z" },
    status: "Active",
    createdAt: { $date: "2021-06-06T20:03:01.544Z" },
    updatedAt: { $date: "2021-06-06T20:03:17.101Z" },
    __v: 0,
  },
];

const jobApplicantsForPost = [
  {
    _id: 1,
    jobPostId: "60bcffddc9068f6473ec271f", // mongoId (jobPost id)
    candidates: [
      // array of objects
      {
        candidate: "60f54f033805e048dc3c8335", // mongoId (jobseeker id)
        status: "60f12548e85b8fef99da7cc4",
      },
      {
        candidate: "60f54f033805e048dc3c8336", //mongoId (jobseeker id)
        status: "60f1260c175643239aee9316",
      },
    ],
  },
];

export {
  oracle,
  allCities,
  ashwekPawar,
  candidateStatus,
  allSkills,
  jobs,
  users,
  jobApplicantsForPost,
  recruiter,
  FRESHER,
  INTERMEDIATE,
  EXPERIENCED,
};

/*
let {
  id,
  role,
  location,
  vacancies,
  hired,
  inProgress,
  applied,
  rejected,
  ...restOfPost
} = post;

posts: [
  post,
  {
    id: 2,
    role: "Full Stack Developer",
    location: "Gurgaon",
    vacancies: 3,
    hired: 2,
    applied: 10,
    rejected: 6,
    inProgress: 4,
    ...restOfPost,
  },
  {
    id: 3,
    role: "Python Developer",
    location: "Pune",
    vacancies: 4,
    hired: 1,
    applied: 38,
    rejected: 2,
    inProgress: 36,
    ...restOfPost,
  },
  {
    id: 4,
    role: "DevOps Developer",
    location: "Hyderabad",
    vacancies: 2,
    hired: 0,
    applied: 6,
    rejected: 0,
    inProgress: 6,
    ...restOfPost,
  },
]*/
