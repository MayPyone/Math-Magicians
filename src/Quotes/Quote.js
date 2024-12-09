import { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    const involve = {
      headers: { 'X-Api-Key': '8aT24gv6TBZiwqX+BHiGug==VwbWI4RgUoRH1xu0' },
    };
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=forgiveness', involve);
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const json = await res.json();
      setData(json[0]);
    } catch (error) {
      console.error('Fetch error:', error);
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true; // To avoid setting state on unmounted component

    if (isMounted) {
      fetchData();
    }

    return () => {
      isMounted = false; // Cleanup function to prevent setting state if unmounted
    };
  }, []); // Empty dependency array ensures it runs only once after mount

  if (hasError) return <div className="quotes">Something went wrong!</div>;

  if (isLoading) {
    return <div className="quotes">Loading...</div>;
  }

  return (
    <div className="quotes">
      <article>{data.quote}</article>
      <span className="author">{" "}{`"${data.author}"`}</span>
    </div>
  );
}
