import axios from "axios";

export class ImageSearchClient {
  constructor(private readonly id: string, private readonly apiKey: string) {}

  async search(query: string) {
    const params = new URLSearchParams({
      q: query.replace(/\s/g, "+"),
      searchType: "image",
      cx: this.id,
      key: this.apiKey,
    }).toString();

    const { data } = await axios.get(
      `https://www.googleapis.com/customsearch/v1?${params}`
    );
    return data.items;
  }
}
