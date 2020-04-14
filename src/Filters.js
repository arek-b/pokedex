import React from "react";
import TypesFilterContainer from "./TypesFilterContainer";

export default function Filters() {
  return (
    <div className="card">
      <div className="card-body">
        <TypesFilterContainer />
        {/* other filters go here */}
      </div>
    </div>
  );
}
