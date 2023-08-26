import React from "react";
import "./style.css";
import {
  FaTwitter,
  FaBehance,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.behance && (
          <li>
            <a href={socialprofils.behance} target="_blank" rel="noopener noreferrer">
            <FaBehance/>
            </a>
          </li>
        )}
        
        {socialprofils.mail && (
          <li>
            <a href="mailto:{socialprofils.mail}" target="_blank" rel="noopener noreferrer">
              <FaMailBulk />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
