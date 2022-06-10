import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projectsData.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return [projects, setProjects];
};

export default useProjects;
