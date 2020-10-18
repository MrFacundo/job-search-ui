import React, {Fragment, useState} from 'react';
import useFetchJobs from '../hooks/useFetchJobs'
import Job from './Job/Job'
import SearchForm from './SearchForm';

function App() {
    const [query, setQuery] = useState(null)
    const {jobs, loading, error} = useFetchJobs(query);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error... Try refreshing.</h1>
    }

    return (
        <Fragment>
            <h1 className="mb-4"> joblocal </h1>
            <SearchForm onSearchClick={setQuery}/>

            {(!jobs || !jobs.length) && <h2>Sorry no jobs for this search!</h2>}

            {jobs && jobs.map(job =>
                <Job key={job.id} job={job}/>
            )}
        </Fragment>
    );
}

export default App;
