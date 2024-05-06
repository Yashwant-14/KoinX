import React, { useState } from "react";

const CoinInfo = ({ heading, discription }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const shortDesc = discription.slice(0, 360);
  const longDesc = discription;

  return (
    <div className="">
      <h2 className="font-semibold text-2xl ">{heading}</h2>
      <p className="pt-3 h-auto ">
        {expanded ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: longDesc }} />
            <span
              className="text-gray-500 cursor-pointer"
              onClick={toggleExpanded}
            >
              Read Less...
            </span>
          </>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: shortDesc }} />
            {shortDesc.length < discription.length && (
              <span
                className="text-gray-500 cursor-pointer"
                onClick={toggleExpanded}
              >
                Read More...
              </span>
            )}
          </>
        )}
      </p>
    </div>
  );
};

export default CoinInfo;
