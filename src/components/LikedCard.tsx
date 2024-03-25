import { Restaurant } from "../context/RestaurantsContext";

export const LikedCard = ({ name, description, url }: Restaurant) => {
  return (
    <div className="liked-card">
      <div className="img-container">
        <img src={url} alt={name} loading="lazy"/>
      </div>
      <div className="liked-card-info">
        <h1>{name}</h1>
        <p> {description} </p>
      </div>
    </div>
  );
};
