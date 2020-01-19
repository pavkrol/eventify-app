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

export const getSimilarArtists = async (artistId, key) => {
  try {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/artists/${artistId}/similar_artists.json?apikey=${key}`
    );
    const similarArtists = await resp.json();

    return similarArtists.resultsPage.results.artist;
  } catch (error) {
    console.error("Error fetching similar artists", error);
  }
};
