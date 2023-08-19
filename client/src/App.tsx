import React, { useState } from 'react';
import {news} from './sdk/news.sdk'; // Make sure the path is correct

function App() {
  const apiKey = '47662350b248d01a9f0a9ba4983a21d0'; // Replace with your GNews API key
  news.setApiKey(apiKey);
  
  const [query, setQuery] = useState('');
  const [newsData, setNewsData] = useState<any>(null);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const fetchNews = async () => {
    if (query) {
      const data = await news.getNews(query);
      setNewsData(data);
    } else {
      alert('Please enter a query.');
    }
  };

  return (
    <div>
      <h1>News App</h1>
      <div>
        <label htmlFor="query">Enter a query: </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter a query..."
        />
        <button onClick={fetchNews}>Get News</button>
      </div>
      <div id="newsContainer">
        {newsData &&
          newsData.totalArticles > 0 &&
          newsData.articles.map((article: any, index: number) => (
            <div key={index}>
              <h3>{index + 1}. {article.title} ({article.source.name}):</h3>
              <p>{article.description}</p>
              <p><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
            </div>
          ))}
        {newsData && newsData.totalArticles === 0 && <p>No articles found.</p>}
      </div>
    </div>
  );
}

export default App;