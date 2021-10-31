import React from "react";
import { Route } from "react-router-dom";
import NavBarUser from "../../components/NavBarUser";

function HomeLayout(props) {
  return (
    <div>
      <NavBarUser />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
