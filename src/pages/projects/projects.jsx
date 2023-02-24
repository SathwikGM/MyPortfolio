import "./projects.scss";

const projects = [
  {
    name: "My Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam, doloremque repudiandae ratione autem tenetur illo. Repellendus eius tempora dolore similique, quia reprehenderit harum repudiandae molestiae ad sit atque odit.",
    pageUrl: "http://localhost:3000/about",
    gitHubUrl: "https://github.com/SathwikGM/MyPortfolio",
  },
  {
    name: "My Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam, doloremque repudiandae ratione autem tenetur illo. Repellendus eius tempora dolore similique, quia reprehenderit harum repudiandae molestiae ad sit atque odit.",
    pageUrl: "http://localhost:3000/about",
    gitHubUrl: "https://github.com/SathwikGM/MyPortfolio",
  },
  {
    name: "My Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam, doloremque repudiandae ratione autem tenetur illo. Repellendus eius tempora dolore similique, quia reprehenderit harum repudiandae molestiae ad sit atque odit.",
    pageUrl: "http://localhost:3000/about",
    gitHubUrl: "https://github.com/SathwikGM/MyPortfolio",
  },
  {
    name: "My Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam, doloremque repudiandae ratione autem tenetur illo. Repellendus eius tempora dolore similique, quia reprehenderit harum repudiandae molestiae ad sit atque odit.",
    pageUrl: "http://localhost:3000/about",
    gitHubUrl: "https://github.com/SathwikGM/MyPortfolio",
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              {project.name}
              {project.description}
              <a href={project.gitHubUrl}>{project.name}</a>
              <a href={project.gitHubUrl}>GitHub</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
