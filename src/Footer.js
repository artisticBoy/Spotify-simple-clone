import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleSharpIcon from "@mui/icons-material/ShuffleSharp";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid } from "@mui/material";
import { PlaylistAdd, VolumeDown } from "@mui/icons-material";
import Slider from "@mui/material/Slider";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://www.protocol.com/media-library/spotify-app-with-headphones-on.png?id=29171621&width=980"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>User</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleSharpIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <PlaylistAdd />
          </Grid>
          <Grid item xs={1.5}>
            <VolumeDown />
          </Grid>
          <Grid item xs={4}>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
