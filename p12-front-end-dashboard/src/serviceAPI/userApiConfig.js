import axios from "axios";
import { hardCodeDatas } from "../config/defaultDatas";

const Axios = axios.create({
  baseURL: `http://localhost:3000/user`,
});

const datas = true;

const getDataUser = async (userId) => {
  if (datas) {
    const request = await Axios.get(`/${userId}`);
    return request.data.data;
  } else {
    const datasMocked = hardCodeDatas.main.find(
      (data) => (data.userId = userId)
    );
    return datasMocked;
  }
};

const getDataActivity = async (userId) => {
  if (datas) {
    const request = await Axios.get(`/${userId}/activity`);
    const response = request.data.data.sessions;
    return response;
  } else {
    const datasActivityMocked = hardCodeDatas.activity.find(
      (data) => (data.userId = userId)
    );
    return datasActivityMocked.sessions;
  }
};

const getDataAverageSessions = async (userId) => {
  if (datas) {
    const request = await Axios.get(`/${userId}/average-sessions`);
    return request.data.data;
  } else {
    const datasSessionsMocked = hardCodeDatas.averageSessions.find(
      (data) => (data.userId = userId)
    );
    return datasSessionsMocked;
  }
};

const getDataPerformance = async (userId) => {
  if (datas) {
    const request = await Axios.get(`/${userId}/performance`);
    const response = request.data.data.data;
    return response;
  } else {
    const datasPerformanceMocked = hardCodeDatas.performance.find(
      (data) => (data.userId = userId)
    );
    return datasPerformanceMocked.data;
  }
};

export {
  getDataUser,
  getDataActivity,
  getDataAverageSessions,
  getDataPerformance,
};
