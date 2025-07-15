import React from "react";
import ProjectCard from "./ProjectCard";
import waste from "../../assets/waste.png"
import ahana from "../../assets/ahana.png";
import carbon from "../../assets/carbon.png"
import wt from "../../assets/wt.png"
import alert from "../../assets/alert.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">

<ProjectCard
  title="Ahana: Puberty Support App"
  main="Built a Flutter app for puberty support with period tracking, symptom logging, nutrition-based shopping, expert consultations, and community resources."
  imgSrc={ahana}
  animation="hover:scale-105"
  demoLink="" // Add if you have a demo
  sourceLink="https://github.com/Nithyahn/PROJECTS/tree/main/Ahana-main"
/>

<ProjectCard
  title="Carbon Emission Tracker"
  main="Developed a full-stack system using React and Flask to calculate and track users’ carbon footprint based on transport, food, and household energy usage like LPG and electricity."
  imgSrc={carbon}
  animation="hover:scale-105"
  link="https://github.com/Nithyahn/PROJECTS/tree/main/Carbon-Emission-Tracker-main"
/>
<ProjectCard
  title="Weather Forecasting App"
  main="A React app that shows real-time weather for any location using a weather API. Displays temperature, humidity, wind speed, and more with a clean, user-friendly UI."
  imgSrc={wt}
  animation="hover:scale-105"
  sourceLink="https://github.com/Nithyahn/PROJECTS/tree/main/WT/weatherapp"
/>


<ProjectCard
  title="Smart Waste Management"
  main= "A system with waste classification, disposal guidance, and reward-based incentives. Integrated location services, carbon emission tracking, and user dashboard using HTML, CSS, and MySQL. Applied SOLID principles and design patterns for modular, scalable architecture."
  imgSrc={waste}
  animation="hover:scale-105"
  demoLink="" // Add if you have a demo
  sourceLink="https://github.com/Nithyahn/Waste_pickup.git"
/>

<ProjectCard
  title="AlertMaster: Corruption Reporting Platform"
  main= "This system empowers individuals to anonymously report corruption incidents, which are then forwarded to higher authorities. Implemented secure data handling, user authentication, and a structured reporting mechanism to enhance transparency and accountability."
  imgSrc={alert}
  animation="hover:scale-105"
  demoLink="" // Add if you have a demo
  sourceLink="https://github.com/Nithyahn/PROJECTS/tree/main/hack/hack/AlertMaster/AlertMaster"
/>

   
      </div>
    </div>
  );
};

export default Projects;
