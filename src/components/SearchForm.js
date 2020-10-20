import React, { useState } from "react";

import { Form, Col, Button } from "react-bootstrap";

export default function SearchForm({ onSearchClick, setPage }) {
	const [query, setQuery] = useState(null);

	const handleClick = (e) => {
		e.preventDefault();
		setPage(1);
		onSearchClick(query);
	};

	return (
		<Form onSubmit={SearchForm} className="mb-4">
			<Form.Row className="align-items-end">
				<Form.Group as={Col}>
					<Form.Label>Description</Form.Label>
					<Form.Control
						onChange={(e) => setQuery(e.target.value)}
						type="text"
					/>
				</Form.Group>
				<Button
					className="mb-3"
					variant="success"
					type="submit"
					onClick={handleClick}
				>
					Search
				</Button>
			</Form.Row>
		</Form>
	);
}
