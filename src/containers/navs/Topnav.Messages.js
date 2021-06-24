import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

import messages from "../../data/messages";

const MessageItem = ({ img, title, date }) => {
  return (
    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
      <div className="pl-3 pr-2">
        <a href="/app/pages/details">
          <p className="font-weight-medium mb-1">{title}</p>
          <p className="text-muted mb-0 text-small">{date}</p>
        </a>
      </div>
    </div>
  );
};

const TopnavMessages = () => {
  return (
    <div className="position-relative d-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle
          className="header-icon notificationButton"
          color="empty"
        >
          <i className="iconsminds-envelope" />
          <span className="count">3</span>
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3 scroll"
          right
          id="notificationDropdown"
        >
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {messages.map((message, index) => {
              return <MessageItem key={index} {...message} />;
            })}
          </PerfectScrollbar>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavMessages;