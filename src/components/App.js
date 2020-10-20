import React, { Fragment, useState } from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import Job from "./Job/Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function App() {
	const [query, setQuery] = useState(null);
	const [page, setPage] = useState(1);
	const { jobs, pagination, loading, error } = useFetchJobs(query, page);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Error... Try refreshing.</h1>;
	}

	return (
		<Fragment>
			<h1 className="mb-4 pt-4"> Job Search UI </h1>
			<SearchForm setPage={setPage} onSearchClick={setQuery} />
			<h3>
				{pagination.total} {query} jobs{" "}
			</h3>

			{(!jobs || !jobs.length) && <h2>Sorry no jobs for this search!</h2>}

			<JobsPagination
				page={page}
				setPage={setPage}
				pagination={pagination}
			></JobsPagination>

			{jobs && jobs.map((job) => <Job key={job.id} job={job} />)}
			<JobsPagination
				page={page}
				setPage={setPage}
				pagination={pagination}
			></JobsPagination>
		</Fragment>
	);
}

export default App;
