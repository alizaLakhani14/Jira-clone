import React from "react";
import "./HoverableNavbar.css";
import Jira from "./../../images/jira-logo.PNG";
import ModalComponent from "./Modal/ModalComponent";
import SearchIssueModal from "./SearchIssueModal/SearchIssueModal";

const HoverableNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);

  const toggle2 = () => {
    setModal2(!modal2);
  };

  const toggle = () => {
    setModal(!modal);
    setIsOpen(false);
  };

  const onMouseEnterHandler = () => {
    setIsOpen(true);
  };

  const onMouseLeaveHandler = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`hoverable-navbar ${isOpen === true &&
        "hoverable-navbar-open"}`}
      onMouseEnter={!modal && onMouseEnterHandler}
      onMouseLeave={!modal && onMouseLeaveHandler}
    >
      <img src={Jira} alt="logo" className="navbar-img" />
      <ul className="navbar-list">
        <li className="navbar-list-item" onClick={toggle2}>
          <i className="fe fe-search navbar-icon" />
          <span
            className={`list-item-span ${isOpen === true &&
              "list-item-span-open"}`}
          >
            Search Issues
          </span>
        </li>
        <li className="navbar-list-item" onClick={toggle}>
          <i className="fe fe-plus navbar-icon" />
          <span
            className={`list-item-span ${isOpen === true &&
              "list-item-span-open"}`}
          >
            Create Issues
          </span>
        </li>
        <li className="navbar-list-item about">
          <i className="fe fe-help-circle navbar-icon" />
          <span
            className={`list-item-span ${isOpen === true &&
              "list-item-span-open"}`}
          >
            About
          </span>
        </li>
      </ul>
      <ModalComponent toggle={toggle} isOpen={modal}></ModalComponent>
      <SearchIssueModal toggle={toggle2} isOpen={modal2} />
    </div>
  );
};

export default HoverableNavbar;
