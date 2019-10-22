import React from 'react';


function SimpsonsQuote ({quote}) {
    return (
        <div className = "DisplayQuote">
            <blockquote>Quote : {quote.quote}
            </blockquote>
            <cite> Character : {quote.character}
            </cite>
            <figure>
                <img
                src = {quote.image}
                alt = {quote.character}
                />
            </figure>



        </div>
    )
}

export default SimpsonsQuote;