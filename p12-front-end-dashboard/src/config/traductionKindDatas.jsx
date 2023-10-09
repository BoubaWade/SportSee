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
    1: "cardio",
    2: "énergie",
    3: "endurance",
    4: "force",
    5: "vitesse",
    6: "intensité",
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

export default datasKindInFrench;
