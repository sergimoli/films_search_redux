import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import moviesImage from "../../assets/movietheater.png";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import List from "./components/List";
import Loading from "./components/Loading";

function Results() {
  const navigate = useNavigate();
  const { title } = useParams();
  // console.log(title);
  //data: movies  --> el que fa es posar l'alies de movies a data
  const {
    data: movies,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchMoviesQuery(title);

  const handleListItemClick = (movieId) => {
    // console.log(movieId);
    navigate(`/detail/${movieId}`);
  };

  const renderContent = () => {
    console.log(error);
    if (error) {
      return (
        <div className=" flex items-center justify-center h-full">
          <p className="text-xl">{error.error}</p>
        </div>
      );
    } else if (isLoading || isFetching) {
      return <Loading />;
    } else if (isSuccess && movies?.results)
      return (
        <List data={movies?.results} onListItemClick={handleListItemClick} />
      );
  };

  console.log(movies, isLoading, isSuccess, isFetching, error);
  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {renderContent()}
        {/* {error && <p>An error ocurred looking for your film</p>}
        {isLoading || isFetching ? <Loading /> : undefined}
        {isSuccess && movies?.results ? (
          <List data={movies?.results} />
        ) : undefined} */}
      </div>
      <div className="w-2/5">
        <img
          src={moviesImage}
          alt="movies"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}

export default Results;
