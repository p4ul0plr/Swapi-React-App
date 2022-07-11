import { useParams } from "react-router-dom";

function Film() {
  const { id } = useParams<{ id: string }>();

  return <h1>{id}</h1>;
}

export default Film;
