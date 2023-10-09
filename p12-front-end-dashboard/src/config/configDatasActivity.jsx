export const getFormatedDatasActivity = (data) => {
  return {
    day: data.day.charAt(data.day.length - 1),
    kilogram: data.kilogram,
    calories: data.calories,
  };
};

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
}
return null;
};
