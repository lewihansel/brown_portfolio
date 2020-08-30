import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Modal from "./Modal";
import Footer from "./Footer";
import { projectFirestore } from "../config/firebase";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedProject, setSelectedProject] = useState([]);

  useEffect(() => {
    projectFirestore
      .collection("portfolio__brownStack")
      .orderBy("order", "desc")
      .get()
      .then((docs) => {
        let data = [];
        docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setProjects(data);
      });
  }, []);

  useEffect(() => {
    if (selectedId) {
      const index = projects.findIndex((item) => item.id === selectedId);
      setSelectedProject(projects[index]);
    }
  }, [projects, selectedId]);

  useEffect(() => {
    selectedId
      ? window.addEventListener("keydown", handleKeyDown)
      : window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      modalTrigger();
      document.body.style.overflowY = "";
    }
  };

  const modalTrigger = (id) => {
    if (selectedId) {
      setSelectedId("");
      document.body.style.overflowY = "";
    } else {
      setSelectedId(id);
      document.body.style.overflowY = "hidden";
    }
  };

  const handleOutOfBoundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      modalTrigger();
    }
  };

  return (
    <>
      <Header />
      <Hero />

      <Projects projects={projects} modalTrigger={modalTrigger} />
      {selectedId && (
        <Modal
          modalTrigger={modalTrigger}
          selectedProject={selectedProject}
          handleOutOfBoundClick={handleOutOfBoundClick}
        />
      )}

      <Footer />
    </>
  );
};

export default Home;
