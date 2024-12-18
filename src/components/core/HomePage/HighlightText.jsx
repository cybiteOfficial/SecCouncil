import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};
 
export default HighlightText;