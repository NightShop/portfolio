/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Icon from "./Icon";

const ProjectInfo = (props) => {
    const { title, description, imageUrl, tags } = props;
    let imageUrlNew;
    imageUrlNew = imageUrl;
    if (!imageUrl.includes(".png")) {
        imageUrlNew = require(`../img/${imageUrl}.png`).default;
    }
    return (
        <div key={title}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img className="h-20 w-20" src={imageUrlNew} alt="project-screenshot" />
            <div className="flex m-4">
                {tags.map((tag) => (
                    <Icon id={tag} />
                ))}
            </div>
        </div>
    );
};

export default ProjectInfo;
