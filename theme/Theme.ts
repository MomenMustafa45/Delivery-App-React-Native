const palette = [
  {
    text: "#f97316",
    bgColor: (opacity: number) => `rgba(251,146,60,${opacity})`,
  },
  {
    text: "#fff",
    bgColor: (opacity: number) => `rgba(2, 48, 71,${opacity})`,
  },
  {
    text: "#000",
    bgColor: (opacity: number) => `rgba(255, 183, 3,${opacity})`,
  },
  {
    text: "#023047",
    bgColor: (opacity: number) => `rgba(33, 158, 188,${opacity})`,
  },
];

export const ThemeColors = {
  ...palette[0],
};
