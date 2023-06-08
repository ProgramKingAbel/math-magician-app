import { useEffect, useState } from "react"

const displayQuote = () => {
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {

                const response = await fetch(
                    'https://api.api-ninjas.com/v1/quotes',
                    {
                        Headers: {
                            'X-Api-Key': 'RSEoeXesveyZYofHdotTdw==uMk2w3sAMDYOZZPA'
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error('Failed to Load Quote');
                }
                const json = await response.json();
                setQuote(json);
            } catch (error) {
                console.error(error);
                setError('Failed To Load Quote')
            } finally {
                
                setIsLoading(false);
            }
        };
        fetchQuote()
    }, [setQuote]);

    if (isLoading) {

    }

    if (error) {
        
    }
    

    return (
        <div>
            {quote && quote.length > 0 ? (
                <>
                    <p>{quote[0].quote}</p>
                    <p>{quote[0].author}</p>
                </>
            ) : <div>No Quote Found</div>}
        </div>
    )
};

export default displayQuote;