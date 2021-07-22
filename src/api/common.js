import API from "../utils/API";

export const uploadFileApi = (data) => {
  const result = API({
    method: "post",
    url: "/files/upload",
    data,
  });

  return result;
};

export const getUserApi = () => {
  const result = API({
    method: "get",
    url: "/getUser",
  });

  return result;
};

export const getJobApi = (data) => {
  const result = API({
    method: "get",
    url: "/job",
    data,
  });
  return result;
};

export const getJobByIdApi = (data) => {
  const result = API({
    method: "get",
    url: "/job/jobById",
    data,
  });
  return result;
};

export const postNewJobApi = (data) => {
  const result = API({
    method: "post",
    url: "/job",
    data,
  });

  return result;
};

export const putJobApi = (data) => {
  const result = API({
    method: "put",
    url: "/job/jobById",
    data,
  });
  return result;
};
