<<<<<<< HEAD:src/components/githubRepoCard/sizeConversion.js
export const format = value => {
=======
export const formatFileSizeDisplay = (value) => {
>>>>>>> 6e82510 (Renamed and moved format function to utils.js):src/utils.js
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};
