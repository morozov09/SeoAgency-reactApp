import projectsStyles from './projects.css';
import { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    return (
        <section className="projects__section">
            <div className="container">
                <div className="projects__wrapper">
                    <h3>Our Projects</h3>
                    <h4>Creative & Professional Creative Agency!</h4>
                    <div className="projects__body">
                        <div className="projects__filters d-flex a-items j-cont-center">
                            <div
                                onClick={() => handleFilterClick("All")}
                                className={`project__filter ${activeFilter === "All" ? "active" : ""} c-pointer`}
                            >
                                All
                            </div>
                            <div
                                onClick={() => handleFilterClick("Web UI")}
                                className={`project__filter ${activeFilter === "Web UI" ? "active" : ""} c-pointer`}
                            >
                                Web UI
                            </div>
                            <div
                                onClick={() => handleFilterClick("Mobile UI")}
                                className={`project__filter ${activeFilter === "Mobile UI" ? "active" : ""} c-pointer`}
                            >
                                Mobile UI
                            </div>
                            <div
                                onClick={() => handleFilterClick("Branding")}
                                className={`project__filter ${activeFilter === "Branding" ? "active" : ""} c-pointer`}
                            >
                                Branding
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
