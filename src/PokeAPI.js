import "regenerator-runtime/runtime"; // fix for parcel's bug
import PropTypes from "prop-types";

export default class PokeAPI {
  static async get(url) {
    PropTypes.checkPropTypes(
      {
        url: PropTypes.string.isRequired,
      },
      { url }
    );
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  static async getPaginated(url, page, resultsPerPage) {
    PropTypes.checkPropTypes(
      {
        url: PropTypes.string.isRequired,
        page: PropTypes.number.isRequired,
        resultsPerPage: PropTypes.number.isRequired,
      },
      { url, page, resultsPerPage }
    );
    url += `?limit=${resultsPerPage}&offset=${(page - 1) * resultsPerPage}`;
    return await PokeAPI.get(url);
  }
}
