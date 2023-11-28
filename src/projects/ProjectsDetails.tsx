import ohms from "../assets/ohms.png";
import yourPlaces from "../assets/yourPlaces.png";
import todoApi from "../assets/TodoApi.png";
import reactLoginPage from "../assets/reactLoginPage.png";
import photoSearch from "../assets/photoSearch.png";
interface projectType {
  title: string;
  img: string;
  skills: string[];
  desc: string;
  largeDesc?: string;
  frontend?: string;
  backend?: string;
  live?: string;
}

export const projects: projectType[] = [
  {
    title: "Your Places",
    img: yourPlaces,  
    skills: ["React - ", "Node - ", "MongoDB - ", "Express - ", "JWT"],
    desc: "Embark on a virtual journey sharing your travel tales! This platform lets you showcase the places you've explored, connecting users worldwide through wanderlust-inspiring photos and experiences.",
    largeDesc:
      "'Your Places' is a unique social media platform crafted for avid travelers and adventure enthusiasts, allowing users to share their globe-trotting escapades with the world. From hidden gems to iconic landmarks, users can post vivid descriptions, photos, and tips about the places they've visited, creating an interactive map of personal adventures. Whether it's a bustling city or a serene mountain retreat, this platform serves as a digital travel journal, inspiring and connecting users while offering a window into diverse destinations worldwide. Embrace the wanderlust and explore the globe through the experiences and recommendations of fellow explorers on 'Your Places.'",
    frontend: "https://github.com/tushark15/your_places_frontend",
    backend: "https://github.com/tushark15/your_places_backend",
    live:"/yourPlaces"
  },
  {
    title: "Online Homework Management System",
    img: ohms,
    skills: ["MERN - ", "AWS - ", "JWT - ", "React-Bootstrap"],
    desc: "A user-friendly online hub designed for students and teachers to effortlessly manage homework. Empowering educational efficiency, OHMS streamlines task organization, submission, and grading, creating a seamless academic experience for all.",
    largeDesc:
      '"Introducing the Online Homework Management System, your go-to platform for seamless and organized academic success. This innovative system empowers students to manage their assignments, deadlines, and academic tasks efficiently. With user-friendly interfaces and intuitive features, it simplifies the process of submitting homework, and tracking deadlines. The platform fosters a conducive environment for learning, monitor progress, and ensure timely completion of assignments. Elevate your academic journey with this comprehensive and user-centric Online Homework Management System, designed to enhance productivity and promote academic excellence."',
    frontend: "https://github.com/tushark15/OHMS_frontend",
    backend: "https://github.com/tushark15/OHMS_backend",
    live:"ohms.tushardev.me"
  },
  {
    title: "Flickr Photo Search App",
    img: photoSearch,
    skills: ["React - ", "Styled-Components - ", "API Integration - "],
    desc: "This project is a React-based application that utilizes the Flickr API to allow users to search and browse through photos. It features a responsive search bar with search history, an infinite scroll functionality for seamless browsing, and a modal view to display images in a larger format.",
    largeDesc:
      "The Flickr Photo Search App is a React-based web application designed to facilitate seamless exploration of images sourced from the Flickr API. The user-friendly interface boasts a search bar enabling users to input search terms, with a responsive suggestion feature based on the search history. Leveraging infinite scroll functionality, the app dynamically loads additional images as users scroll through the content, ensuring a continuous viewing experience. Upon clicking an image, a modal view is presented, displaying a larger version of the selected photo. The app prioritizes user convenience by persisting the last five search terms in local storage, providing quick access to recent searches. Built with React and integrated with react-bootstrap and react-infinite-scroll-component, this project offers an engaging way to discover and view Flickr photos effortlessly.",
    frontend: "https://github.com/tushark15/imageViewer",
    live: "https://image-viewer-xi.vercel.app/",
  },
  {
    title: "Todo APP API",
    img: todoApi,
    skills: ["Node - ", "MongoDB - ", "Express - ", "Swagger - ", "Docker"],
    desc: "Streamline your task management effortlessly with our robust CRUD operations. This versatile API simplifies creating, reading, updating, and deleting tasks, offering a seamless integration for efficient to-do list management across applications",
    largeDesc: `"Introducing TodoApp API, your solution for streamlined task management. This robust API offers seamless Create, Read, Update, and Delete (CRUD) operations, providing developers with powerful tools to manage tasks effectively. With its intuitive endpoints, developers can easily integrate the API into their applications, enabling users to create, view, update, and delete tasks effortlessly. Designed with simplicity and functionality in mind, TodoApp API ensures a smooth and reliable experience for managing to-do lists across various platforms. Enhance your application's task management capabilities with the TodoApp API, empowering users to stay organized and productive."`,
    backend: "https://github.com/tushark15/todoapp-api",
    live: "todo.tushardev.me/api-docs"
  },

  {
    title: "React Login Page",
    img: reactLoginPage,
    skills: ["React - ", "Styled-Components - "],
    desc: "A simple responsive login page. The project utilizes React and Vite for efficient development, TypeScript for type safety, and styled-components to style a simple login page UI with basic functionality.",
    largeDesc:
      "This project employs React, a library for constructing the user interface, offering flexibility and ease in UI development. It leverages Vite to expedite the development and building process, ensuring efficiency. The codebase is exclusively written in TypeScript, enhancing type safety and facilitating a more robust developer experience. To style its components, the project utilizes styled-components, which provide a convenient and flexible way to apply styles. It demonstrates a straightforward login page UI equipped with fundamental functionalities, using styled-components to elegantly style and enhance the appearance and behavior of the login form components. Overall, the project combines React, Vite, TypeScript, and styled-components to create a structured, efficient, and visually appealing login page with a focus on user experience and development convenience.  ",
    frontend: "https://github.com/tushark15/ReactLogin",
    live:"rlp.tushardev.me"
  },
  
];
