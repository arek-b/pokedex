import React from "react";
import TypesFilterContainer from "./TypesFilterContainer";
import PropTypes from "prop-types";

export default function Filters({ filters }) {
  return (
    <div className="card">
      <div className="card-body">
        <TypesFilterContainer filter={filters.types} />
        {/* other filters go here */}
      </div>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
};
