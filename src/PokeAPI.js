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
    try {
      let response = await PokeAPI._cachedFetch(url);
      let json = await response.json();
      return json;
    } catch (e) {
      return false;
    }
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

  static async getAll(urls) {
    PropTypes.checkPropTypes({ urls: PropTypes.array.isRequired }, { urls });
    const apiResults = [];
    for (const key in urls) {
      if (Object.prototype.hasOwnProperty.call(urls, key)) {
        const url = urls[key];
        apiResults.push(await PokeAPI.get(url));
      }
    }
    return apiResults;
  }

  static async _cachedFetch(url, options) {
    const isCached = Object.prototype.hasOwnProperty.call(PokeAPI._cache, url);
    if (isCached) {
      const cachedValue = PokeAPI._cache[url];
      const cachedResponse = new Response(
        new Blob([JSON.stringify(cachedValue)], { type: "application/json" })
      );
      return Promise.resolve(cachedResponse);
    }

    const response = await fetch(url, options);
    if (response.status === 200) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.match(/application\/json/i)) {
        response
          .clone()
          .json()
          .then((json) => {
            PokeAPI._cache[url] = json;
          });
      }
    }
    return response;
  }
}

// not using session storage or local storage due to 5 MB limit
PokeAPI._cache = {};
