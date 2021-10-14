import ProjectInfo from "./ProjectInfo";
import projectsInfo from "../projectsData";

const Projects = () => {
    return (
        <div>
            {Object.entries(projectsInfo).map(([id, project]) => (
                <ProjectInfo
                    key={id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                />
            ))}
        </div>
    );
};

export default Projects;
