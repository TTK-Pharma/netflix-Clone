const key = 'a4dfde7707ef8929578ecf9275ae9ec6';

const moviesRequest = {
  requestPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${key}`,
  requestTv: `https://api.themoviedb.org/3/discover/tv?api_key=${key}`,
  channel: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
}

export default moviesRequest