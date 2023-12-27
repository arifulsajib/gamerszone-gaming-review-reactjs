import { useLocation } from "react-router";
import "./BreadCrumbs.css";
import { NavLink } from "react-router-dom";
const BreadCrumbs = () => {
  const location = useLocation();

  //   make broadcrams
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <NavLink to={currentLink} className="crumb text-decoration-none mx-2 text-white mt-5" key={crumb}>
          {crumb}
        </NavLink>
      );
    });
  return (
    <>
      {location.pathname !== "/" && (
        <div className="d-flex my-2 breadcrumbs mt-4 container-fluid">
          <NavLink to="/" className="crumb text-decoration-none mx-2 text-white mt-5">
            Home
          </NavLink>
          {crumbs}
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
