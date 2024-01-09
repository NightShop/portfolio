import ButtonHead from "./ButtonHead";

const Head = (props) => {
    const { setSectionProjects, setSectionAbout } = props;
    return (
        <div className="h-90 top-1/3 ml-5 sm:mr-20  absolute md:mt-16 md:top-1/3 md:left-24 md:w-1/2">
            <h1 className="text-sizeHeaderSmall font-extralight md:text-sizeHeader m-2">
                Boštjan Zupan,
                <br />
                Software Developer
            </h1>
            <p className="text-sizeUnderHeader font-extralight m-2">Mechanical Engineer by degree, Web Developer by passion.</p>
            <div className="w-full flex justify-around sm:flex-none sm:w-max">
                <ButtonHead setSection={setSectionProjects} title="EXPLORE PROJECTS" />
                <ButtonHead setSection={setSectionAbout} title="VIEW PROFILE" />
            </div>
        </div>
    );
};

export default Head;
