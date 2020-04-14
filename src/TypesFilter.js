import React from "react";
import PropTypes from "prop-types";
import * as Accents from "./Accents";
import { addTo, removeFrom } from "./ArrayHelpers";

export default function TypesFilter({
  availableTypes,
  selectedTypes,
  setSelectedTypes,
}) {
  const typesCheckboxes = availableTypes.map(({ name }) => {
    return (
      <div key={name} className="form-check">
        <label className="form-check-label text-capitalize">
          <input
            type="checkbox"
            className="form-check-input"
            value=""
            checked={selectedTypes.includes(name)}
            onChange={(e) =>
              setSelectedTypes(
                e.target.checked
                  ? addTo(selectedTypes, name)
                  : removeFrom(selectedTypes, name)
              )
            }
          />
          {name}
        </label>
      </div>
    );
  });
  return (
    <div>
      <h5>{Accents.Pokemon} types</h5>
      {availableTypes.length === 0 ? (
        <p className="text-muted">Loading types...</p>
      ) : (
        typesCheckboxes
      )}
    </div>
  );
}

TypesFilter.propTypes = {
  availableTypes: PropTypes.array.isRequired,
  selectedTypes: PropTypes.array.isRequired,
  setSelectedTypes: PropTypes.func.isRequired,
};
