/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Icon from "./Icon";

const ProjectInfo = (props) => {
    const { title, description, imageUrl, tags, live, code } = props;
    let imageUrlNew;
    imageUrlNew = imageUrl;
    if (!imageUrl.includes(".png")) {
        imageUrlNew = require(`../img/${imageUrl}.png`).default;
    }
    return (
        <div>
            <h1 className="text-6xl m-10 tracking-widest">{title}</h1>
            <div className="flex w-full mb-24 border-b-2 pb-10 items-center flex-wrap lg:flex-nowrap" key={title}>
                <div className="w-full lg:ml-4 lg:w-1/3">
                    <p className="p-4 pt-0 text-xl">{description}</p>
                </div>
                <div className="w-full lg:w-1/3 m-4 h-96 overflow-auto">
                    <img className="w-full" src={imageUrlNew} alt="project-screenshot" />
                </div>
                <div className="flex w-full lg:w-1/3 flex-wrap justify-center m-4">
                    <div className="w-full flex flex-wrap justify-center h-3/4">
                        {tags.map((tag) => (
                            <Icon id={tag} />
                        ))}
                    </div>
                    <div className="w-full h-1/4 items-center mt-20 mb-4 relative flex justify-around mx-5">
                        <a
                            className="border-white text-center relative top-1/2 transform -translate-y-1/2 border py-2 px-8 mr-8 flex-grow
                            sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                            hover:text-darkBlue hover:bg-white transition-all duration-300"
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live
                        </a>
                        <a
                            className="border-white text-center relative top-1/2 transform -translate-y-1/2 border py-2 px-8 mr-8 flex-grow
                            sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                            hover:text-darkBlue hover:bg-white transition-all duration-300"
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
