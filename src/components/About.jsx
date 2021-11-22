import { FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "./Icon";

const About = (props) => {
    const { setSectionIntro, setSectionProjects } = props;
    const skills = [
        "HTML",
        "CSS",
        "tailwindcss",
        "JavaScript",
        "React",
        "Firebase",
        "Webpack",
        "Github",
        "Git",
        "C#",
        "Python",
        "Cypress",
        "Docker",
    ];
    return (
        <div>
            <div className="border-b-2 mb-6 md:mx-4">
                <h1 className="text-6xl m-10 ">About</h1>
            </div>
            <div className="flex flex-wrap border-b-2 mb-10 mx-4">
                <div className="text-2xl md:mx-6 mb-10 lg:w-2/3">
                    <p>
                        Deeply invested in the life-long learning mentality, I am a front-end developer
                        who always tries to optimize workflow and make better product.
                        My focus is in creating websites on the JavaScript stack of
                        React and Firebase and from my background in professional career as a mechanical engineer I am well
                        acquainted to bringing out solutions to complex problems.
                        I gladly dwell in new languages and frameworks as I did in past in C, C#, Python
                        and Arduino programming.
                    </p>
                </div>
                <div className="w-1/4 text-4xl ml-8 mb-10 justify-between">
                    <a
                        className="flex min-w-min hover:underline m-5"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/NightShop"
                    >
                        <FaGithub />
                        <p className="ml-4">Github</p>
                    </a>
                    <a
                        className="flex min-w-min hover:underline m-5"
                        href="https://www.linkedin.com/in/bostjan-zupan/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                        <p className="ml-4">Linkedin</p>
                    </a>
                    <a
                        className="hover:underline m-5"
                        href="https://drive.google.com/file/d/1bSS95Z1CVmP1sgiKS3JkZarFgctWjsUn/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CV
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap align-middle justify-center">
                {skills.map((skill) => <Icon id={skill} />)}
            </div>
            <button
                className="border-white border block my-10 mx-auto py-2 w-52 px-8 flex-grow
                        sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                        hover:text-darkBlue hover:bg-white transition-all duration-300"
                type="button"
                onClick={setSectionProjects}
            >
                Projects
            </button>
            <button
                className="border-white border block mb-10 mx-auto py-2 w-52 px-8 flex-grow
                        sm:flex-grow-0 border-opacity-70 tracking-widest text-xl
                        hover:text-darkBlue hover:bg-white transition-all duration-300"
                type="button"
                onClick={setSectionIntro}
            >
                Back
            </button>

        </div>
    );
};

export default About;
