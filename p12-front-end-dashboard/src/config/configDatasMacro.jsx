import calories from "../assets/icons/calories-icon.png";
import proteins from "../assets/icons/protein-icon.png";
import carbohydrates from "../assets/icons/carbs-icon.png";
import lipids from "../assets/icons/fat-icon.png";

function getFormatedDatasMacros(datas) {
  if (datas)
    return [
      {
        id: 1,
        icon: calories,
        value: `${datas.calorieCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}kCal`,
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

export default getFormatedDatasMacros;
