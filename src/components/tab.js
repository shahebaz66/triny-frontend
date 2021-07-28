import React from "react";
import "./tab.css";

function Tab(props) {
  return (
    <div className="tab">
      <div>
        <div style={{ fontSize: "25px" }}>
          <b>{props.data.displayName}</b>
        </div>
        <div>{props.data.webhookState}</div>
        <div>{props.data.isFallback}</div>
        <div>{props.data.priority}</div>
      </div>
    </div>
  );
}

export default Tab;
