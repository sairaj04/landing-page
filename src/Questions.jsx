import React from "react";
import { useState } from "react";
import data from "./data";

function Questions() {
  const [selected, setSelected] = useState(null);

  function handleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="p-2">
              <div
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-2 cursor-pointer rounded-lg"
                onClick={() => handleClick(dataItem.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{dataItem.question}</h3>
                  <span className="text-lg font-medium ml-8">+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="mt-2">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Questions;
