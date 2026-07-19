import { useParams } from "react-router-dom";
import Card from "../components/CardLesson";
import { useEffect } from "react";

const Project = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Vũ Thu Vân - Bài tập ${id}`;
  }, [id]);

  return <Card />;
};

export default Project;
