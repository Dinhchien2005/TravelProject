import React from "react";

const NavChild = (props) => {
  return (
    <div className="collapse  navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <a href={props} className="nav-item nav-link active">
          {props.home}
        </a>
      </div>
    </div>
  );
};

export default NavChild;
