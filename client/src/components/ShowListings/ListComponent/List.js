import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../../assets/img/2.png";
import { useDispatch } from "react-redux";
import { viewList } from "../../../actions/listings";

//component that creates cards to show the listings of cars
const List = ({ list }) => {
  //dispatch to update view count
  const dispatch = useDispatch();

  //using raised state to detect mouse hovers and react accordingly
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  //scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //we go to another page and display our detailed view there
  const loadDetail = () => {
    console.log(list);
    dispatch(viewList(list._id));
    navigate("detail/" + list._id);
    scrollToTop();
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classes.flexList}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
      onClick={loadDetail}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="make">
            C
          </Avatar>
        }
        action={<IconButton aria-label="share"></IconButton>}
        title={list.Make + ", " + list.Model}
        subheader={list.Price.toLocaleString() + "€ , " + list.views + " views"}
      />
      <CardMedia
        component="img"
        height="194"
        image={!list.URL ? placeholderImage : list.URL}
        alt={list.Make}
      />
      <CardContent sx={{ minWidth: 345 }}>
        <Typography variant="body2" color="text.secondary">
          {list.Description.substring(0, 100) +
            (list.Description.length > 100 ? "..." : "")}
        </Typography>
      </CardContent>
      <CardActions className="mt-auto">
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default List;
