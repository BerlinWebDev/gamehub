import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/games", {
        signal: controller.signal,
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
