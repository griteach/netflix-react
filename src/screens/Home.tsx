import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { users } from "../db";
import { getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return <div style={{ backgroundColor: "white", height: "200vh" }}></div>;
}

export default Home;
