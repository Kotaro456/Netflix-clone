const API_KEY = "ded3e5c06f4e17ded17b9942de737180";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_generes=99`,
}

export default requests;