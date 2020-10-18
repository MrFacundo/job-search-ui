import React, {useState} from 'react'

import { Form, Col, Button } from 'react-bootstrap'

export default function SearchForm({ onSearchClick }) {
    const [query, setQuery] = useState(null);

    const handleClick =(e) => {
        e.preventDefault()
        onSearchClick(query);
    }


  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={e => setQuery(e.target.value)} name="description" type="text" />
        </Form.Group>
          <Button onClick={handleClick}>Search</Button>
      </Form.Row>
    </Form>
  )
}