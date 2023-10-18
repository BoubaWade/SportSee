//------------------------------------------------Datas Activity---------------------------------------------

export const getFormatedDatasActivity = (data) => {
  return {
    day: data.day.charAt(data.day.length - 1),
    kilogram: data.kilogram,
    calories: data.calories,
  };
};

//------------------------------------------------Datas Macros Cards-----------------------------------------

import calories from "../assets/icons/calories-icon.png";
import proteins from "../assets/icons/protein-icon.png";
import carbohydrates from "../assets/icons/carbs-icon.png";
import lipids from "../assets/icons/fat-icon.png";

export function getFormatedDatasMacros(datas) {
  if (datas)
    return [
      {
        id: 1,
        icon: calories,
        value: `${datas.calorieCount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}kCal`,
        name: "Calories",
      },
      {
        id: 2,
        icon: proteins,
        value: `${datas.proteinCount}g`,
        name: "Proteines",
      },
      {
        id: 3,
        icon: carbohydrates,
        value: `${datas.carbohydrateCount}g`,
        name: "Glucides",
      },
      {
        id: 4,
        icon: lipids,
        value: `${datas.lipidCount}g`,
        name: "Lipides",
      },
    ];
}

// ------------------------------------------------Datas Radar Chart-----------------------------------------------------

const translations = {
  en: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  },
  fr: {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  },
};

const selectedLanguage = "fr";

function translateKind(key) {
  return translations[selectedLanguage][key] || key;
}

const datasKindInFrench = {
  1: translateKind(1),
  2: translateKind(2),
  3: translateKind(3),
  4: translateKind(4),
  5: translateKind(5),
  6: translateKind(6),
};

export const getFormatedRadarDatas = (item) => {
  return {
    subject: datasKindInFrench[item.kind],
    value: item.value,
    fullMark: 250,
  };
};

// ---------------------------------------------Datas Score Chart-----------------------------------------------------

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

export const radialBarDatas = (userDatas) => {
  return [
    {
      name: "",
      score: 100,
      fill: "white",
    },
    {
      name: "Score",
      score: userDatas.todayScore,
    },
  ];
};
export { formatedScore };

//---------------------------------------------------Datas Sessions Chart----------------------------------------------

export const getFormatedDatasSessions = (data) => {
  return {
    day: data.day,
    sessionLength: data.sessionLength,
    firstLettersOfDays: ["L", "M", "M", "J", "V", "S", "D"],
  };
};

export function getMouseHover(event) {
  if (event.isTooltipActive) {
    const goalsWidth = goals.clientWidth;
    const mouseXposition = Math.round(
      (event.activeCoordinate.x / goalsWidth) * 100
    );
    goals.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXposition}%, rgba(175,0,0,1.5) ${mouseXposition}%, rgba(175,0,0,1.5) 100%)`;
  } else {
    goals.style.background = "";
  }
}
