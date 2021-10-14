import { useState } from "react";
import ParticleBackground from "./ParticleBackground";
import Head from "./Head";
import Projects from "./Projects";

const App = () => {
    const [section, setSection] = useState("projects");
    return (
        <div className="text-white font-custom">
            {section === "intro" ? <Head /> : null}
            {section === "projects" ? <Projects /> : null}
            <ParticleBackground />
        </div>
    );
};

export default App;
