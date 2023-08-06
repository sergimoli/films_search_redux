import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //per disparar accions
import { useParams } from "react-router-dom";
import {
  fetchMovieDetail,
  fetchMovieRatings,
} from "../../redux/actions/movies";

function Detail() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const {
    isFetchingMovieRatings,
    isFetchingMovieDetail,
    isLoading,
    errorFetchingMovieDetail,
    errorFetchingMovieRatings,
    successFetchingMovieDetail,
    successFetchingMovieRatings,
    ratings,
    movieDetail,
  } = useSelector((state) => state.movie);

  // const { success, error, isFetching, isLoading, ratings } = useSelector(
  //   (state) => state.moviesReducer
  // );
  // console.log(state);
  // console.log(dispatch);
  //cridat un cop es monta el component
  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  console.log(movieId);

  return (
    // <div className="flex flex-row px-16 h-screen items-center justify-center">
    //   <div className="w-1/3 flex justify-center">
    //     <img src="" className="" alt="moviedetail" />
    //   </div>
    //   <div className=""></div>
    // </div>
    <div>fillde puta</div>
  );
}

export default Detail;
