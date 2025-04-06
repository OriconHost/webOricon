import React from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <div className=" rounded-lg  ">
        {React.Children.map(children, (child) => (
          <div className="mb-8 last:mb-0">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
