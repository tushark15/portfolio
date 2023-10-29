import { Card } from 'react-bootstrap'

interface ProjectCardProps {
    title: string,
    desc: string,
    image: string
}

const ProjectCard = (props : ProjectCardProps) => {
  return (
    <Card style={{width: "300px", height: "300px", borderRadius: "20px"}}>
        <Card.Img variant="top" style={{borderRadius: "20px"}} src="https://via.placeholder.com/300x150" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.desc}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProjectCard