import axios from 'axios';
import { ActionTypes } from '../constants/actionTypes';

// api temel url belirleme
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzFhYTVmNTkwMjBlM2JlODJlNGZkOTA2MGM2ZTYzNiIsInN1YiI6IjY0NzQ5OTM5OTQwOGVjMDBjMjhmYTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKe2uazo7iAtiZVbMS4VQ2mhnm32Kx7p1q6IiVwkdbw',
  },
};

// senkron akiyon
export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});

// asenkron aksiyon
export const getFilms = () => (dispatch) => {
  // api çağrısı burada yapılır
  axios.get('/movie/popular?language=en-US&page=1', options).then((response) =>
    dispatch({
      type: ActionTypes.GET_FILMS,
      payload: response.data.results,
    })
  );
};

// asenkron aksiyon
export const getGenres = () => (dispatch) => {
  // api çağrısı burada yapılır
  axios.get('/genre/movie/list?language=en', options).then((response) =>
    dispatch({
      type: ActionTypes.GET_GENRES,
      payload: response.data.genres,
    })
  );
};

// aksiyon değil
export const getFilmsByUrl = async (url) => {
  // api çağrısı burada yapılır
  const res = await axios.get(url, options);
  return res.data;
};
