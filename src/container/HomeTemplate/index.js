import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import NavBarUser from "../../components/NavBarUser";

function HomeLayout(props) {
  return (
    <div>
      <NavBarUser />
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  useEffect(() => {
    document.title = "Trang chủ | Space";
  });
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
