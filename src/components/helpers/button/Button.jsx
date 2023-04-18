import React from "react";
import styled from "./Button.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const link = props?.link ?? "";
  const isInternalLink = link.startsWith("#");

  if (isInternalLink) {
    return (
      <Link
        smooth
        to={link.substring(1)}
        className={`${styled.button} ${styled[props.className]}`}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styled.button} ${styled[props.className]}`}
      >
        {props.children}
      </a>
    );
  }
};

export default Button;
