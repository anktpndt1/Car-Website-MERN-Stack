import { React } from "react";
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
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <label>Make</label>
            <select
              value={props.make}
              className="form-select"
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
          <div className="col">
            <Box sx={{ width: 1 }}>
              <label>Price</label>
              <Slider
                onChange={handleSliderChange}
                aria-label="Temperature"
                defaultValue={1000000}
                valueLabelDisplay="auto"
                step={10000}
                min={0}
                max={1000000}
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
