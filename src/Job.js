import React, { useState } from 'react'
import { Card, Badge, Button, Collapse  } from 'react-bootstrap'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)

    return (
        <Card className="mb-3 bg-light" >
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {job.attributes.title} - <span className="text-muted font-weight-light">{job.attributes.company.name}</span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(job.attributes.publications[0].createTime).toLocaleDateString()}
              </Card.Subtitle>
              <Card.Subtitle>
              {job.attributes.location.city}
              </Card.Subtitle>
              <Badge variant="secondary" className="mr-2">{job.attributes.workingTimes[0].title}</Badge>
              <Badge variant="secondary" className="mr-2">{job.attributes.employmentTypes[0].title}</Badge>
            </div>
            <img className="d-none d-md-block" height="50" alt={job.attributes.company.name} src={job.attributes.company.logo} />
          </div>
          <p>   ...</p>
          <Card.Text>
            <Button
              className="viewDetails"
              onClick={() => setOpen(prevOpen => !prevOpen)}
              variant="outline-secondary"
            >
              {open ? 'Hide Details' : 'View Details'}
            </Button>
          </Card.Text>
          <Collapse in={open}>
            <div className="mt-4">
            <Card.Text className="m-2">{job.attributes.previewText}</Card.Text>
            </div>
        </Collapse>
        </Card.Body>
        </Card>
        )
}
