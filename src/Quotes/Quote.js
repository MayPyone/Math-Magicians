import { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState([]);  // Start with `null` to represent no data
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  let count = 1;

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/quotes');
      const json = await res.json();
      if(count <2 )
      if (json.quotes && json.quotes.length > 0) {
        setData(json.quotes[Math.floor(Math.random() * json.quotes.length)]);
        count += 1;
      }
    } catch (error) {
      setHasError(true);
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };


  useEffect(() => {
    fetchData();
  },[]);
  
  if (hasError) {
    return <div className="quotes">Something went wrong!</div>;
  }

  if (isLoading) {
    return <div className="quotes">Loading...</div>;
  }

  return (
    <div className="quotes">
      {data ? (
        <>
          <article>{data.quote}</article>
          <span className="author">{`"${data.author}"`}</span>
        </>
      ) : (
        <div>No quote available</div>
      )}
    </div>
  );
}
