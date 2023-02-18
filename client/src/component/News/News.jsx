import React from "react";
import "./News.css"

export const News = (props) => {

  function logout() {
    props.setLoginStatus(false);
    localStorage.clear();
  }

  return (
    <div className="news">
      News
      <button onClick={logout}>Logout</button>
    </div>
  );
};
