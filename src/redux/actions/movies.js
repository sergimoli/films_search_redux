import { createAction } from "@reduxjs/toolkit";
const BASE_URL = "https://imdb8.p.rapidapi.com/title";
const headers = {
  "X-RapidAPI-Key": "4fb8cb2e74msh825d86cc606b808p1dfb7fjsna5ceec228754",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};
// const options = {
//   method: "GET",
//   headers: {
//     headers,
//   },
// };

//Accions que seran caxeades(disparades) pels Reducers:
export const startFetchMovieRatings = createAction("START_FETCH_MOVIE_RATINGS");
export const successFetchMoviesRatings = createAction(
  "SUCCESS_FETCH_MOVIE_RATINGS"
);
export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    console.log(startFetchMovieRatings.toString());
    // console.log(dispatch);
    dispatch(startFetchMovieRatings());
    //INICIAR LA LLAMADA
    const response = await fetch(`${BASE_URL}/get-ratings?tconst=${movieId}`, {
      headers,
    });

    const data = await response.json();

    console.log(data);
    dispatch(successFetchMoviesRatings({ data }));
  } catch (error) {
    dispatch(errorFetchMovieRatings({ error }));
  }
};

export const startFetchMovieDetail = createAction("START_FETCH_MOVIE_DETAIL");
export const successFetchMovieDetail = createAction(
  "SUCCESS_FETCH_MOVIE_DETAIL"
);
export const errorFetchMovieDetail = createAction("ERROR_FETCH_MOVIE_DETAIL");

export const fetchMovieDetail = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieDetail());

    const overviewDetailsReponse = await fetch(
      `${BASE_URL}/get-overview-details?tconst=${movieId}`,
      { headers }
    );
    const overviewDetailsData = await overviewDetailsReponse.json();

    const topCastReponse = await fetch(
      `${BASE_URL}/get-top-cast?tconst=${movieId}`,
      { headers }
    );
    const topCastData = await topCastReponse.json();

    const detailsReponse = await fetch(
      `${BASE_URL}/get-details?tconst=${movieId}`,
      { headers }
    );
    const detailsData = await detailsReponse.json();

    const fullCreditsReponse = await fetch(
      `${BASE_URL}/get-full-credits?tconst=${movieId}`,
      { headers }
    );
    const fullCreditsData = await fullCreditsReponse.json();
    //

    dispatch(
      successFetchMovieDetail({
        overview: overviewDetailsData,
        topCast: topCastData,
        details: detailsData,
        fullCredits: fullCreditsData,
      })
    );
  } catch (error) {
    dispatch(errorFetchMovieDetail({ error }));
  }
};
