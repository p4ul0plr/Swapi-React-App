import { Link } from "react-router-dom";

interface FilmCardProps {
  $id: number;
  $title: string;
  $descriptiom: string;
}

function FilmCard({ $id, $title, $descriptiom }: FilmCardProps) {
  return (
    <div>
      <Link to={`/films/${$id}`}>{$title}</Link>
      <p>{$descriptiom}</p>
    </div>
  );
}

export default FilmCard;
