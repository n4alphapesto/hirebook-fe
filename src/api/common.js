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
    url: "/api/getUser",
  });

  return result;
};

export const getJobListApi = () => {
  const result = API({
    method: "get",
    url: "/api/job",
  });
  return result;
};
