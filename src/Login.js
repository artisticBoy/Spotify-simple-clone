import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      {/* Spotify logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt="There was a logo here"
        srcset=""
      />
      {/* Login button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
