import { React, useState } from "react";
import List from "./ListComponent/List";
import Filter from "../Filter/filter";
import { useSelector } from "react-redux";
import { Container, Grid, Grow } from "@material-ui/core";
import "./styles.css";

//component to show the listings of all the cars
const Listings = () => {
  const lists = useSelector((state) => state.listings);
  //state of our filters
  const [price, setPrice] = useState(1000000);
  const [make, setMake] = useState(null);

  console.log(lists);
  return (
    <>
      <Grow in>
        <Grid container>
          <Container className="mt-3">
            {!lists.length ? (
              <Grid
                container
                alignItems="stretch"
                spacing={4}
                className="my-auto mt-2"
                style={{ justifyContent: "center" }}
              >
                <h6>There are no car listings yet. Create one through Sell!</h6>
              </Grid>
            ) : (
              <>
                <Filter
                  price={price}
                  setPrice={setPrice}
                  make={make}
                  setMake={setMake}
                />
                <Grid
                  container
                  alignItems="stretch"
                  spacing={4}
                  className="my-auto mt-5"
                >
                  {lists.map((list) =>
                    list.Make === (make ? make : list.Make) &&
                    list.Price <= price ? (
                      <Grid
                        key={list._id}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        className="flex-display"
                      >
                        <List list={list} />
                      </Grid>
                    ) : (
                      <></>
                    )
                  )}
                </Grid>
              </>
            )}
          </Container>
        </Grid>
      </Grow>
    </>
  );
};

export default Listings;
