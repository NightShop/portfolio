import ProjectInfo from "./ProjectInfo";
import projectsInfo from "../projectsData";

const Projects = (props) => {
    const { setSectionIntro, setSectionAbout } = props;
    return (
        <div>
            {Object.entries(projectsInfo).map(([id, project]) => (
                <ProjectInfo
                    key={id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    live={project.live}
                    code={project.code}
                />
            ))}
            <div className="mx-auto mb-10">
                <button
                    type="button"
                    onClick={setSectionAbout}
                    title="About"
                    className="border-white border block mb-10 -mt-5 mx-auto py-2 w-52 px-8 flex-grow
                        sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                        hover:text-darkBlue hover:bg-white transition-all duration-300"
                >
                    About Me
                </button>
                <button
                    type="button"
                    onClick={setSectionIntro}
                    title="Back"
                    className="border-white border block mx-auto py-2 w-52 px-8 flex-grow
                        sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                        hover:text-darkBlue hover:bg-white transition-all duration-300"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Projects;
