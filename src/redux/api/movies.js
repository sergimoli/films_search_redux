import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "4fb8cb2e74msh825d86cc606b808p1dfb7fjsna5ceec228754",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://imdb8.p.rapidapi.com" }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/title/find?q=${title}`,
        method: "GET",
        headers,
      }),
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
