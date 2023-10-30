import ProjectCard from "./ProjectCard";
import ohms from "../assets/ohms.png";
import yourPlaces from "../assets/yourPlaces.png";
import todoApi from "../assets/todoApi.png";
import Header from "../components/Header";
interface projectType {
  title: string;
  img: string;
  skills: string[];
  desc: string;
  largeDesc?: string;
  frontend?: string;
  backend?: string;
}

const Projects = () => {
  const projects: projectType[] = [
    {
      title: "Your Places",
      img: yourPlaces,
      skills: ["React - ", "Node - ", "MongoDB - ", "Express - ", "JWT"],
      desc: "Embark on a virtual journey sharing your travel tales! This platform lets you showcase the places you've explored, connecting users worldwide through wanderlust-inspiring photos and experiences.",
      largeDesc:
        "'Your Places' is a unique social media platform crafted for avid travelers and adventure enthusiasts, allowing users to share their globe-trotting escapades with the world. From hidden gems to iconic landmarks, users can post vivid descriptions, photos, and tips about the places they've visited, creating an interactive map of personal adventures. Whether it's a bustling city or a serene mountain retreat, this platform serves as a digital travel journal, inspiring and connecting users while offering a window into diverse destinations worldwide. Embrace the wanderlust and explore the globe through the experiences and recommendations of fellow explorers on 'Your Places.'",
      frontend: "https://github.com/tushark15/your_places_frontend",
      backend: "https://github.com/tushark15/your_places_backend",
    },
    {
      title: "Online Homework Management System",
      img: ohms,
      skills: ["MERN - ", "AWS - ", "JWT - ", "React-Bootstrap"],
      desc: "A user-friendly online hub designed for students and teachers to effortlessly manage homework. Empowering educational efficiency, OHMS streamlines task organization, submission, and grading, creating a seamless academic experience for all.",
      largeDesc:
        '"Introducing the Online Homework Management System, your go-to platform for seamless and organized academic success. This innovative system empowers students to manage their assignments, deadlines, and academic tasks efficiently. With user-friendly interfaces and intuitive features, it simplifies the process of submitting homework, and tracking deadlines. The platform fosters a conducive environment for learning, monitor progress, and ensure timely completion of assignments. Elevate your academic journey with this comprehensive and user-centric Online Homework Management System, designed to enhance productivity and promote academic excellence."',
      frontend: "https://github.com/tushark15/OHMS_frontend",
      backend: "https://github.com/tushark15/OHMS_backend"
    },
    {
      title: "Todo APP API",
      img: todoApi,
      skills: ["Node - ", "MongoDB - ", "Express - ", "Swagger - ", "Docker"],
      desc: "Streamline your task management effortlessly with our robust CRUD operations. This versatile API simplifies creating, reading, updating, and deleting tasks, offering a seamless integration for efficient to-do list management across applications",
      largeDesc: `"Introducing TodoApp API, your solution for streamlined task management. This robust API offers seamless Create, Read, Update, and Delete (CRUD) operations, providing developers with powerful tools to manage tasks effectively. With its intuitive endpoints, developers can easily integrate the API into their applications, enabling users to create, view, update, and delete tasks effortlessly. Designed with simplicity and functionality in mind, TodoApp API ensures a smooth and reliable experience for managing to-do lists across various platforms. Enhance your application's task management capabilities with the TodoApp API, empowering users to stay organized and productive."`,
      backend:"https://github.com/tushark15/todoapp-api"
    },
  ];
  return (
    <section
      id="projects"
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{ color: "white", margin: "50px 150px", marginBottom: "200px" }}
    >
      <div
        className="d-flex flex-row-reverse gap-3"
        style={{ width: "100%", marginBottom: "70px", color: "black" }}
      >
        <Header>Projects</Header>

        <hr
          style={{
            width: "100%",
            marginTop: "50px",
          }}
        />
      </div>
      <div
        className="d-flex flex-wrap align-items-center justify-content-center"
        style={{ width: "100%", gap: "100px" }}
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              image={project.img}
              skills={project.skills}
              largeDesc={project.largeDesc}
              frontend={project.frontend}
              backend={project.backend}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
