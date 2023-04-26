import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import React from "react";



const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Pharmacy</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </React.Fragment>
  );
};

export default Header;
