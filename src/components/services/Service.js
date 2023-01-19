import { useHttp } from "../hooks/htttp.hook"


const useService = () => {
    const {loading, error, request, clearError, process, setProcess} = useHttp();
console.log('Request')
    const _apiBase = 'https://api.themoviedb.org/3/';
    const _apiKey = 'api_key=f57e81c90d2b61957487f7219aaca8bd';

    const getSingleFilm = async (id = 550) => {
        const res = await request(`${_apiBase}movie/${id}?${_apiKey}`);
        return res;
    }

    const getMostPopular = async () => {
        const res = await request(`${_apiBase}discover/movie?${_apiKey}&sort_by=popularity.desc`)
        return res;
    }

    // const getFilmsList = async () => {
    //     const res = await request(`${}`);
    //     return res;
    // }

    const getFilmsByYear = async (year = 2022) => {
        const res = await request(`${_apiBase}/discover/movie?${_apiKey}&primary_release_year=${year}&sort_by=vote_average.desc`);
        return res;
    }

    const getFilmsForKids = async () => {
        const res = await request(`${_apiBase}/discover/movie?${_apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`);
        return res;
    }

    return {
        loading, 
        clearError,
        error, 
        getSingleFilm,
        process, 
        setProcess,
        getMostPopular,
        getFilmsByYear,
        getFilmsForKids,
    }
}

export default useService;