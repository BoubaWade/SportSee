import axios from "axios";

const Axios = axios.create({
  baseURL: `http://localhost:3000/user`,
});

const getDataUser = (userId) => {
  return Axios.get(`/${userId}`);
};

const getDataActivity = (userId) => {
  return Axios.get(`/${userId}/activity`);
};

const getDataAverageSessions = (userId) => {
  return Axios.get(`/${userId}/average-sessions`);
};

const getDataPerformance = (userId) => {
  return Axios.get(`/${userId}/performance`);
};

export {
  getDataUser,
  getDataActivity,
  getDataAverageSessions,
  getDataPerformance,
};
