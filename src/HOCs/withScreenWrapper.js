import React from "react";

import { ScreenWrapper } from "../components";

const withScreenWrapper = (WrappedComponent) => {
  return (props) => (
    <ScreenWrapper>
      <WrappedComponent {...props} />
    </ScreenWrapper>
  );
};

export default withScreenWrapper;
