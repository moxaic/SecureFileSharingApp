import React, { createContext, useContext, useState } from "react";

const AvailablePeers = createContext();
const useAvailablePeers = () => useContext(AvailablePeers);

const AvailablePeersProvider = ({ children }) => {
  const [peers, setPeers] = useState(null);

  return <AvailablePeers.Provider>{children}</AvailablePeers.Provider>;
};

export default AvailablePeersProvider;
