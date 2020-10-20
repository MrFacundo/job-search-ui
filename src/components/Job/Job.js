import React, {useState} from 'react'
import {Card, Badge, Button, Collapse} from 'react-bootstrap'

export default function Job({job}) {
    const [open, setOpen] = useState(false)

    if (!job || !job.attributes) {
        return null;
    }

    const {attributes} = job;

    const qualifications = attributes.qualifications.map((qualification) =>
        <li key={qualification.title}>{qualification.title}</li> 
    );

    return (
        <Card className="mb-3 bg-light shadow-sm mb-5 bg-white rounded">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {attributes.title} - <span
                            className="text-muted font-weight-light">{attributes.company.name}</span>
                        </Card.Title>
                        <div>
                            <Card.Subtitle className="text-muted mb-2">
                                {/* {new Date(attributes.publications[0].createTime).toLocaleDateString('de-DE')} */}
                                {Math.floor((new Date(Date.now()) - new Date(attributes.publications[0].publicationTime)) / (1000 * 3600 * 24))} days ago

                            </Card.Subtitle>
                            {attributes.location.city && 
                            <Card.Subtitle>
                                {attributes.location.city}
                            </Card.Subtitle>}
                        </div>
                        {attributes.workingTimes[0] &&
                        <Badge variant="secondary" className="mr-2">{attributes.workingTimes[0].title}</Badge>}

                        {attributes.employmentTypes[0] && attributes.employmentTypes[0].title &&
                        <Badge variant="info"
                               className="mr-2 mb-2">{attributes.employmentTypes[0].title}</Badge>}
                    </div>
                    {attributes.company && attributes.company.name &&
                    <img className="d-none d-md-block" alt={attributes.company.name}
                         src={attributes.company.logo}/>}
                         
                </div>
                <Card.Text className="mb-0 text-center">
                    <Button
                        className="mt-4"
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                        variant="outline-success"
                    >
                        {open ? 'Hide Details' : 'View Details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <Card.Text className="m-2"><strong>Responsibilities: </strong>{attributes.previewText}</Card.Text>
                        {attributes.requirements && 
                        <Card.Text className="m-2"><strong>Requirements: </strong>{attributes.requirements}</Card.Text>}
                        {attributes.qualifications.length > 0 && 
                        <Card.Text className="m-2"><strong>Qualifications: </strong>{qualifications}</Card.Text>}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
