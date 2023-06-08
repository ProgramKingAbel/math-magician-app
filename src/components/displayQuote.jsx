import { useEffect, useState } from "react"

const myQuote = () => {
    const [quote, setQuote] = useState([null]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            const response = await fetch(
                'https://api.api-ninjas.com/v1/quotes',
                {
                    Headers: {
                        'X-Api-Key': 'RSEoeXesveyZYofHdotTdw==uMk2w3sAMDYOZZPA'
                    }
                }
            )
            const json = await response.json();
            setQuote(json);
            setIsLoading(false);
        }
        fetchQuote()
    }, [setQuote]);

    if (isLoading) {
        
    }
    

    return (
    <div>
            {quote && quote.length > 0 ? (
                <>
                <p>{quote[0].quote}</p>
                <p>{ quote[0].author }</p>     
                </>
            ): <div>No Quote Found</div>}
    </div>
    )
}