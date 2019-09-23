import React from 'react';

function FeaturedPost ({ photo, title, content }) {
    return (
        <article className="featuredArticle">
            <div className="featuredHalf">
                <h2>{title}</h2>
                <p>
                    {content}
                </p>
            </div>
            <div className="featuredHalf">
                <img src={photo} alt="" />
            </div>
        </article>
    )

}

export default FeaturedPost