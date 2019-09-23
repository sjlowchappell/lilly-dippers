import React from 'react';

function BlogPost({ photo, title, content }) {
	return (
		<article>
			<img src={photo} alt="" />
			<h2>{title}</h2>
			<p>{content}</p>
		</article>
	);
}

export default BlogPost;
