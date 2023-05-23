import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { addCar, getCarById, updateCar } from "../redux/actions/carsActions";
import { useParams } from "react-router-dom";

  const Edit = () => {
  const [carData, setCarData] = useState({
    name: "",
    image: "",
    rentPerHour: "",
    capacity: "",
    feulType: "",
  });

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { carId } = useParams();
  const { car } = useSelector((state) => state.cars);
  console.log("car", car);
  const token = user?.token;

  useEffect(() => {
    dispatch(getCarById(carId));
    setCarData({
      name: car.name,
      image: car.image,
      rentPerHour: car.rentPerHour,
      capacity: car.capacity,
      feulType: car.feulType,
    });
  }, [
    dispatch,
    carId,
    car.name,
    car.image,
    car.rentPerHour,
    car.capacity,
    car.feulType,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
    dispatch(updateCar(carId, carData, toast));
    setCarData({
      name: "",
      image: "",
      rentPerHour: "",
      capacity: "",
      feulType: "",
    });
    
  };

  return (
    <div>
      <h1>Edit Car</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Car Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={carData.name || ""} // added || "" to remove error of controlled component to uncontrolled component 
            onChange={handleChange}
            placeholder='Car Name'
          />

          <label htmlFor='image' className='form-label'>
            Car Image
          </label>
          <input
            type='text'
            className='form-control'
            id='image'
            name='image'
            value={carData.image || ""}
            onChange={handleChange}
            placeholder='Car Image'
          />

          <label htmlFor='rentPerHour' className='form-label'>
            Rent Per Hour
          </label>
          <input
            type='number'
            className='form-control'
            id='rentPerHour'
            name='rentPerHour'
            value={carData.rentPerHour || ""}
            onChange={handleChange}
            placeholder='Rent Per Hour'
          />

          <label htmlFor='capacity' className='form-label'>
            Capacity
          </label>
          <input
            type='number'
            className='form-control'
            id='capacity'
            name='capacity'
            value={carData.capacity || ""}
            onChange={handleChange}
            placeholder='Capacity'
          />

          <label htmlFor='feulType' className='form-label'>
            Fuel Type
          </label>
          <input
            type='text'
            className='form-control'
            id='feulType'
            name='feulType'
            value={carData.feulType || ""}
            onChange={handleChange}
            placeholder='Fuel Type'
          />

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;