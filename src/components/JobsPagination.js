import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobsPagination({ page, setPage, pagination }) {
const lastPage = pagination.total_pages

  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Pagination >
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < lastPage  && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {page < (lastPage - 2) && <Pagination.Ellipsis />}
      {page < (lastPage - 1) && <Pagination.Item onClick={() => setPage(lastPage)}>{lastPage}</Pagination.Item>}
      {page < lastPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  )
}