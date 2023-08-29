import { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const involve = {
    headers: { 'X-Api-Key': '8aT24gv6TBZiwqX+BHiGug==VwbWI4RgUoRH1xu0' },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=forgiveness', involve);

        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);
  if (hasError) return <div className="quotes">Something went wrong!</div>;

  if (isLoading) { return <div className="quotes">Loading...</div>; }
  return (
    <div className="quotes">
      <article>
        {data.quote}
      </article>
      <span className="author">
        {' '}
        {`"${data.author}"`}
      </span>
    </div>
  );
}
