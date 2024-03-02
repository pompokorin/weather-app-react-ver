import React from "react";

export default function Footer() {
  return (
    <div className="Footer text-center">
      This project was coded by Mina Miyamoto and is {""}
      <a
        href=" https://github.com/pompokorin/weather-app-react-ver"
        target="_blank"
        rel="noreferrer"
      >
        Open-sourced on Github {""}
      </a>
      and {""}
      <a
        href="https://grand-kangaroo-bf9228.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </div>
  );
}
