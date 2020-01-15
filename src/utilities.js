export const getArtistImage = async artistName => {
  const imageResp = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`
  );
  const imageData = await imageResp.json();
  return imageData.picture_medium;
};
