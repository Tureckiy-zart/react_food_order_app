import React, { useContext } from "react";

const CertContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});






export default CertContext;
