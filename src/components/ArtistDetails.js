import React, { useContext, useState, useEffect } from "react";
import { KeyContext } from "../providers/KeyProvider";
import Loader from "./Loader";

const ArtistDetails = ({ artist }) => {
  const [isLoading, setLoading] = useState(false);
  const key = useContext(KeyContext);
  //const [artist, setArtist] = setState({});

  const searchArtist = async artistName => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistName}`
    );
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    setLoading(true);
  });

  return (
    <div>
      <p>{artist.id}</p>
      <p>{artist.name}</p>
    </div>
  );
};

export default ArtistDetails;
