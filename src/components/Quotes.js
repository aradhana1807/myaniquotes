import React, { useState, useEffect } from 'react';
const Quotes = () => {

    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState('');
    const [anime, setAnime] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url = 'https://animechan.vercel.app/api/random';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data;
                setQuote(dataQuotes.quote);
                setCharacter(dataQuotes.character);
                setAnime(dataQuotes.anime);

            })
    }

    const handleClick = () => {
        getQuote();
    }
    return (
        <div id="quote-box">
        <h1>AniQuotes</h1>
            <div id="text">
                <p>
                    {quote}
                </p>
            </div>
            <div id="character">
                <p>
                    {character}
                </p>

                <p>
                    , {anime}
                </p>
            </div>

            <div id="buttons">
                <button onClick={handleClick} id="new-quote">
                    Random Quote
                </button>
            </div>

        </div >
    );
}

export default Quotes;