import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
// import JobsPagination from './jobsPagination'
import { Container, Pagination } from 'react-bootstrap'
import Job from './Job'
import SearchForm from './SearchForm';


function App() {
  const [params, setParams] = useState({})
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(query, page)

  
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  
  
  
  
  // function handleSearch(e) {
  //   setQuery(inputValue)
  //   setPage(1)
  // }

  return (
    <Container className="my-4">
      <h1 className="mb-4"> joblocal </h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {/* <JobsPagination page={page} setPage={setPage}></JobsPagination> */}
      {loading && <h1>Loading...</h1>  }
      {error && <h1>Error... Try refreshing.</h1> }
      {/* <input type="text" handleChange={(e) => setInputValue(e.target.value)} ></input>
      <button onClick={handleSearch}>search</button> */}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}

      </Container>
  );
}

export default App;
