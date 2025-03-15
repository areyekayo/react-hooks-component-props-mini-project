import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
    let minutesToRead;
    const coffeeEmoji = "☕️";
    const bentoEmoji = "🍱";

    if (minutes < 30) {
        let rounded = Math.ceil(minutes / 5) * 5;
        let emojiNum = rounded / 5;
        minutesToRead = `${coffeeEmoji.repeat(emojiNum)} ${minutes} min read`;
    }
    else {
        let rounded = Math.ceil(minutes / 10) * 10;
        let emojiNum = rounded / 10;
        minutesToRead = `${bentoEmoji.repeat(emojiNum)} ${minutes} min read`
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutesToRead}</small>
            <p>{preview}</p>
        </article>
    )
};

export default Article;