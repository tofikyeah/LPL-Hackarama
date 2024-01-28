import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "25px", textAlign: "center", padding: "20px", color: "#07407b" }}>
          Developed By 
          <span>
            <Link
              style={{ color: "#07407b" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/alberto-martinez-2003/"}
            > Alberto Martinez
            </Link>
          </span>

          <span>
            <Link
              style={{ color: "#07407b" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/halil-hamscho/"}
            > Halil Hamscho
            </Link>
          </span>

          <span>
            <Link
              style={{ color: "#07407b" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/tofik-hamscho/"}
            > Tofik Hamscho
            </Link>
          </span>

          <span>
            <Link
              style={{ color: "#07407b" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/gabrielbanda/"}
            > Gabriel Banda
            </Link>
          </span>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
