const formatedScore = (datas) => {
  if (datas.score) {
    return {
      todayScore: datas.score * 100,
    };
  } else {
    return {
      todayScore: datas.todayScore * 100,
    };
  }
};

export { formatedScore };
