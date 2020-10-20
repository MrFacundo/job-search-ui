import {useReducer, useEffect} from 'react'
// import data from "./api.json";
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://api.joblocal.de/v4/search-jobs'
// const BASE_URL = 'https://staging-api.joblocal.de/v4/search-jobs'
//const BASE_URL = 'api.json'


function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs: [], pagination: {}}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs, pagination: action.payload.pagination}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []}
        default:
            return state
    }
}

export default function useFetchJobs(query, page) {
    const [state, dispatch] = useReducer(reducer, {jobs: [], pagination: {}, loading: true})

    useEffect(() => {
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            params: {
                'search.query': query,
                'page.number': page,
            }
        })
            .then(res => {
                // handle success
                dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data.included, pagination: res.data.meta.pagination} })
            })
            .catch(function (error) {
                // handle error
                dispatch({type: ACTIONS.ERROR, payload: {error: error}})
            });
    }, [query, page])

    return state
}