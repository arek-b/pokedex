import React, { useEffect, useState } from "react";
import PokeAPI from "./PokeAPI";
import TypesFilter from "./TypesFilter";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

export default function TypesFilterContainer({ filter }) {
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = filter;

  useEffect(() => {
    /**
     * Gets all Pokemon types in single request.
     *
     * There are 20 of them at the time of writing this and it's not likely
     * that the number will increase significantly in the future, but let's
     * request 100 just to make sure we're getting all of them.
     */
    PokeAPI.get("https://pokeapi.co/api/v2/type/?limit=100").then(
      (apiResult) => {
        if (apiResult) {
          setAvailableTypes(apiResult.results);
        } else navigate("/api-connection-failed/");
      }
    );
  }, []);

  return (
    <TypesFilter
      availableTypes={availableTypes}
      selectedTypes={selectedTypes || []}
      setSelectedTypes={setSelectedTypes}
    />
  );
}

TypesFilterContainer.propTypes = {
  filter: PropTypes.array.isRequired,
};
