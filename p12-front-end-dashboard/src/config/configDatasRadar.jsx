import datasKindInFrench from "./traductionKindDatas";

export const getFormatedRadarDatas = (item) => {
  return {
    subject: datasKindInFrench[item.kind],
    value: item.value,
    fullMark: 250,
  };
};
