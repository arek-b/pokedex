import "regenerator-runtime/runtime";

export default class PokeAPI {
  static async get(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
}
