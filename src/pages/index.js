import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogPost from "../components/BlogPost"
import FeaturedPost from "../components/FeaturedPost"
import blogPost from "../images/blogPost.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <div className="wrapper">
        <FeaturedPost
          photo={blogPost}
          title="This is a featured Post!"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
        />
        <div className="articleBox">
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
        </div>
        <div className="articleBox">
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
          <BlogPost
            photo={blogPost}
            title="Heres another blog Component!"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolor aliquam.
        Obcaecati nisi qui at officiis"
          />
        </div>
        <Link to="/page-2/">Next Page</Link>
      </div>
    </main>
  </Layout>
)

export default IndexPage

{
  /* <Layout>
  <SEO title="Home" />
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <Link to="/page-2/">Go to page 2</Link>
</Layout> */
}
