import React from "react";
import { motion } from "framer-motion";

const Projects = ({ projects, modalTrigger }) => {
  const hover = {
    scale: 1.005,
    boxShadow:
      "0 1.5px 4.8px -3px rgba(0, 0, 0, 0.115), 0 10px 38px -3px rgba(0, 0, 0, 0.23)",
    transition: { duration: 0.1 },
  };

  const tap = {
    scale: 0.99,
  };

  return (
    <div className="websiteList">
      <div className="websiteList__title">Projects</div>
      <div className="websiteList__content">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={hover}
            whileTap={tap}
            className="websiteList__card"
            onClick={(e) => {
              e.preventDefault();
              modalTrigger(project.id);
            }}
          >
            <img src={project.image} alt={`${project.title} - website`} />
            <span>
              <strong>{project.title}</strong>
              <span>{project.brief}</span>
              <p>{project.createdWith}</p>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
