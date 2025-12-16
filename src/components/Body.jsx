import { useState } from "react";
import Restraurent from "./Restaurants";
import { restaurants } from "../utils/restraurantsData";

const Body = () => {
  const [filterRes, setFilterRes] = useState(restaurants);

  const filter = () => {
    const fiterRestraurants = restaurants.filter((item) => item.rating >= 4.5);
    // console.log(fiterRestraurants);
    setFilterRes(fiterRestraurants);
  };
  return (
    <div>
      <div>
        <button className="filter-btn" onClick={filter}>
          Top Rated Restraurants
        </button>
      </div>
      <div className="card-conatiner">
        {filterRes.map((item) => (
          <Restraurent
            key={item.id}
            name={item.name}
            location={item.location}
            cuisines={item.cuisines}
            image={item.imageUrl}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
