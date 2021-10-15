import { useState } from "react";
import ParticleBackground from "./ParticleBackground";
import Head from "./Head";
import Projects from "./Projects";
import About from "./About";

const App = () => {
    const [section, setSection] = useState("intro");
    return (
        <div className="text-white font-custom">
            {section === "intro"
                ? (
                    <Head
                        setSectionProjects={() => setSection("projects")}
                        setSectionIntro={() => setSection("intro")}
                        setSectionAbout={() => setSection("about")}
                    />
                )
                : null}
            {section === "projects" ? <Projects setSectionIntro={() => setSection("intro")} setSectionAbout={() => setSection("about")} /> : null}
            {section === "about" ? <About setSectionIntro={() => setSection("intro")} setSectionProjects={() => setSection("projects")} /> : null}
            <ParticleBackground />
        </div>
    );
};

export default App;
