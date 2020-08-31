import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdArrowBack } from "react-icons/md";
import { IoLogoGithub, IoIosLink } from "react-icons/io";
import { useState } from "react";

const Modal = ({ modalTrigger, selectedProject, handleOutOfBoundClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (selectedProject) {
      console.log(selectedProject.userInterface);
      setImages(selectedProject.userInterface);
    } else {
      console.log("none");
    }
  }, [selectedProject]);

  return (
    <div>
      <motion.div
        className="modal"
        onClick={handleOutOfBoundClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="modal__contentSpace"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal__backButton" onClick={modalTrigger}>
            <MdArrowBack />
          </div>

          <div className="modal__project">
            <a href={selectedProject.url}>
              <img
                src={selectedProject.image}
                alt={`project : ${selectedProject.title}`}
              />
            </a>
            <div className="modal__projectTitle">{selectedProject.title}</div>
            <div className="modal__projectDescription">
              {selectedProject.description}
            </div>
            <div className="modal__projectDescription">
              {selectedProject?.description2}
            </div>
            <div className="modal__projectDescription">
              {selectedProject?.description3}
            </div>

            {images &&
              images.map((image) => <img src={image} alt={`${image}`} />)}

            <div className="modal__links">
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  className="modal__projectUrl"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                >
                  <IoIosLink /> <p>live site</p>
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="modal__projectUrl"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                >
                  <IoLogoGithub /> <p>repo</p>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;
