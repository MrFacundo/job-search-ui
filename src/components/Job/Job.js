import React, {useState} from 'react'
import {Card, Badge, Button, Collapse} from 'react-bootstrap'

export default function Job({job}) {
    const [open, setOpen] = useState(false)

    if (!job || !job.attributes) {
        return null;
    }

    const {attributes} = job;

    return (
        <Card className="mb-3 bg-light">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {attributes.title} - <span
                            className="text-muted font-weight-light">{attributes.company.name}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(attributes.publications[0].createTime).toLocaleDateString()}
                        </Card.Subtitle>
                        <Card.Subtitle>
                            {attributes.location.city}
                        </Card.Subtitle>
                        {attributes.workingTimes[0] && attributes.workingTimes[0].title &&
                        <Badge variant="secondary" className="mr-2">{attributes.workingTimes[0].title}</Badge>}

                        {attributes.employmentTypes[0] && attributes.employmentTypes[0].title &&
                        <Badge variant="secondary"
                               className="mr-2">{attributes.employmentTypes[0].title}</Badge>}
                    </div>
                    {attributes.company && attributes.company.name &&
                    <img className="d-none d-md-block" height="50" alt={attributes.company.name}
                         src={attributes.company.logo}/>}
                </div>
                <p> ...</p>
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
                        <Card.Text className="m-2">{attributes.previewText}</Card.Text>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
