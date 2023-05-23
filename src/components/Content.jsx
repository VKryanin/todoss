import React from "react";

export const Content = ({onLogout}) => {

    return (
        <div>
          <h1>To Do sssss list</h1>
          <p>Welcome to the app!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      );
}