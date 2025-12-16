const Restraurent = (props) => {
  const { name, location, cuisines, image, rating } = props;
  return (
    <div className="card-item">
      <img className="card-img" alt="briyani" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <div className="cuisine">
        <h4>{location}</h4>
        <div>
          <h4>{rating}</h4>
          <h4>30 mins</h4>
        </div>
      </div>
    </div>
  );
};

export default Restraurent;
