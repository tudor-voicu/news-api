export class news {
  private apiKey: string;

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getNews(query: string) {
    const baseUrl = 'https://gnews.io/api/v4/search';
    const url = `${baseUrl}?q=${query}&lang=en&apikey=${this.apiKey}`;

    try {
      const response = await fetch(url);
      const newsData = await response.json();
      return newsData;
    } catch (error) {
      console.error('Error fetching news data:', error);
      return null;
    }
  }
}
