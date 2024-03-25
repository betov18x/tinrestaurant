import "./Card.css";
import { Restaurant } from "../context/RestaurantsContext";
import heart from "../assets/heart.svg";
import cross from "../assets/cross.svg";

interface CardProps extends Restaurant {
  handleLikeOrDontLike: (id: number, option: boolean) => void;
}

export const Card = ({
  id,
  name,
  description,
  url,
  handleLikeOrDontLike: handleLikeOrDontLike,
}: CardProps) => {
  return (
    <div className="card">
      <img className="card-img" src={url} alt={name} />

      <div className="card-content">
        <div className="card-info">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="btn-actions">
          <button
            onClick={() => handleLikeOrDontLike(id, false)}
            className="btn dont-like"
            title="Don't like this restaurant"
            aria-label="Don't like this restaurant"
          >
            <img src={cross} alt="cross" />
          </button>

          <button
            onClick={() => handleLikeOrDontLike(id, true)}
            className="btn like"
            title="Like this restaurant"
            aria-label="Like this restaurant"
          >
            <img src={heart} alt="heart" />
          </button>
        </div>
    </div>
  );
};
