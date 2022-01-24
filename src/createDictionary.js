import React from "react";
import Card from "./components/Card";

function createDictionary(emoji) {
  return (
    <Card 
      src={emoji.src} 
      term={emoji.term} 
      def={emoji.def} 
      key={emoji.id} 
    />
  );
}

export default createDictionary;
