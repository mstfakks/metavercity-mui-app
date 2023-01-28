import dynamic from "next/dynamic";
import React from "react";

const WithoutSsr = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(WithoutSsr), {
  ssr: false,
});
