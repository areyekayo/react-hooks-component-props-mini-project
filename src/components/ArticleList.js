import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const postElements = posts.map(post => {
        const {id, title, date, preview, minutes} = post;
        return <Article key={id} title={title} date={date} preview={preview} minutes={minutes} />
    })

    return (
        <main>
            {postElements}
        </main>
    )
};

export default ArticleList;