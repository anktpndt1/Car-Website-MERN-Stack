import { React, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

//filter component

const Filter = (props) => {
  //functions to change state
  const handleSliderChange = (event, newValue) => {
    props.setPrice(newValue);
    console.log(props.price);
  };
  const handleMakeChanges = (event) => {
    props.setMake(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div class="container mt-4">
        <div class="row">
          <div class="col">
            <label>Make</label>
            <select
              value={props.make}
              class="form-select"
              aria-label="Default select example"
              onChange={handleMakeChanges}
            >
              <option value="" selected>
                None
              </option>
              <option value="BMW">BMW</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Fiat">Fiat</option>
              <option value="Kia">Kia</option>
              <option value="Toyota">Toyota</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
          </div>
          <div class="col">
            <Box sx={{ width: 1 }}>
              <label>Price</label>
              <Slider
                onChange={handleSliderChange}
                aria-label="Temperature"
                defaultValue={100000}
                valueLabelDisplay="auto"
                step={1000}
                min={0}
                max={100000}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
