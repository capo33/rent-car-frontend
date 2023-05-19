import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../redux/actions/carsActions";
import Spinner from "../components/Spinner";
  
const Home = () => {
  const { cars, loading} = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
    { loading && <Spinner />}
       <div className="container">
        <div className="row">
          {cars.map((car) => (
            <div className="col-md-4 my-3 mt-5" key={car._id}>
              <div className="card">
                <img
                  src={car.image}
                  className="card-img-top"
                  alt={car.name}
                  style={{ height: "200px" }}
                />
              {/* <Link to={`/cars/${car._id}`}>
                </Link> */}
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5> 
                  <p className="card-text">{car.description}</p>
                  <p className="card-text">Rent per hour: {car.rentPerHour}€</p>
                  <Link to={`/booking-car/${car._id}`} className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Home;
