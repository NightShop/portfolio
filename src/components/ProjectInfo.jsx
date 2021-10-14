const ProjectInfo = (props) => {
    const { key, title, description, imgUrl, tags } = props;
    console.log(tags);
    return (
        <div key={key}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={imgUrl} alt="project-screenshot" />
            {tags.map((tag) => (
                <div>
                    <h1>{tag}</h1>
                </div>
            ))}
        </div>
    );
};

export default ProjectInfo;
