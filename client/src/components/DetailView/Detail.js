import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Grow } from "@material-ui/core";
import "./styles.css";
import placeholderImage from "../../assets/img/2.png";
import { CardMedia } from "@mui/material";

//component for showing the detailed view

const Detail = () => {
  const { id } = useParams();
  const lists = useSelector((state) => state.listings);
  console.log(lists);
  const details = lists.find((element) => element._id === id);

  return (
    <Grow in>
      <Container maxWidth="md" className="flex-box mt-5">
        {!details ? (
          <h1>Couldn't find the car :(</h1>
        ) : (
          <>
            <div className="text-align-left mb-2">
              <h1>{details.Make}</h1>
              <h5>{details.Model}</h5>
              <p className="small-font">{details.views} views</p>
            </div>
            <CardMedia
              component="img"
              src={!details.URL ? placeholderImage : details.URL}
              className="img-container"
            />
            <div className="details mt-4">
              <h5 className="mb-3">Details of the Car</h5>
              <p>
                <b>Year Built: </b>
                {details.Year}
              </p>
              <p style={{ textAlign: "justify" }}>
                <b>Description: </b>
                {details.Description}
              </p>
              <p>
                <b>Price: </b>
                {details.Price.toLocaleString() + "€"}
              </p>
              <p>
                <b>Email of the Owner: </b>
                {details.Email}
              </p>
            </div>
          </>
        )}
      </Container>
    </Grow>
  );
};

export default Detail;
