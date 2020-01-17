export const getArtistImage = async artistName => {
  try {
    const imageResp = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${artistName}`
    );
    const imageData = await imageResp.json();

    return imageData.data.length ? imageData.data[0].picture_medium : null;
  } catch (error) {
    console.error("Error fetching artist image", error);
  }
};
