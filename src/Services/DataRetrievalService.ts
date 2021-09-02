export default class DataRetreivalService {
  async requestProducts() {
    const res = await fetch(
      "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?" +
        new URLSearchParams({
          q: "dishwasher",
          key: "AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI",
        }),
      { mode: "cors" }
    );
  }
}
