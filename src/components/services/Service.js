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

    return {
        loading, 
        clearError,
        error, 
        getSingleFilm,
        process, 
        setProcess
    }
}

export default useService;