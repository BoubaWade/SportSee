export const DAYSOFWEEK = ["L", "M", "M", "J", "V", "S", "D"];

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-container">
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      </div>
    );
  }
  return null;
};

export const getFormatedDatasSessions = (data) => {
  return {
    day: data.day,
    sessionLength: data.sessionLength,
  };
};
