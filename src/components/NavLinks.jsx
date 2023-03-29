import React from "react";
import { Link } from "react-scroll";

const NavLinks = (props) => {
  const {link, className, onClick} = props;



  return (
      <li className={className}>
        <Link to={link} smooth duration={500} onClick={onClick}>
            {link}
        </Link>
        </li>
  )
}

export default NavLinks;