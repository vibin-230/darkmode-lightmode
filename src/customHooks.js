import React, { useState, useEffect } from "react";

export const useLocalStorageState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const oldValue = localStorage.getItem(key);
    return oldValue !== null ? oldValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};

// export const useSetScrollPosition =(pos,innerHeight)=>{
// 	if (currentLink < window.innerHeight) {
// 		window.location.hash = "#home";
// 	  } else if (
// 		currentLink > window.innerHeight &&
// 		currentLink < window.innerHeight * 2
// 	  ) {
// 		window.location.hash = "#about";
// 	  } else if (
// 		currentLink > window.innerHeight * 2 &&
// 		currentLink < window.innerHeight * 3
// 	  ) {
// 		window.location.hash = "#projects";
// 	  } else if (currentLink >= window.innerHeight * 3) {
// 		window.location.hash = "#contacts";
// 	  }

// }
