import React, { createContext, useState } from 'react';

export const CoordinatesContext = createContext();

export const CoordinatesProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState([]);
  
  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates}}>
      {children}
    </CoordinatesContext.Provider>
  );
};
