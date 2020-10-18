import { useReducer, useEffect } from 'react'
import axios from 'axios'
// import data from "./api.json";

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

// const BASE_URL = 'https://api.joblocal.de/v4/search-jobs'
const BASE_URL = 'https://staging-api.joblocal.de/v4/search-jobs'
// const BASE_URL = 'api.json'



function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
          return { ...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
          return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }
}
export default function useFetchJobs(params, page) {
    const [state, dispatch ] = useReducer(reducer, {jobs: [], loading: true })

    useEffect(() => {
      dispatch({ type: ACTIONS.MAKE_REQUEST})
      axios.get(BASE_URL, {
        params: { page: page, ...params }
      }).then (res => {
        console.log(res.data)
        dispatch({ type: ACTIONS.GET_DATA, payload: {jobs: res.data.included } })
      }).catch(e => {
      dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
      })
    }, [params, page])
    
    return state
}