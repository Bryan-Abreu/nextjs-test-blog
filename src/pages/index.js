import React, {useEffect, useState} from "react";
import { graphCms } from "../../lib/graphCms";
import Post from "../../components/Post";

const index = ({ posts }) => {

  const [content, setContent] = useState([]);
  useEffect(()=>{
  async function getStaticProps() {
    const { posts } = await graphCms.request(`
    {
      posts{
        title
        slug
        thumbnail{
          url
        }
        categories{
          name
          color{
            css
          }
        }
      }
    }
    `);
  }
  },[]);

  
  return (


    <div className="container">
      <div>
        {posts.map((post) =><Post key={post.slug} post={post} /> )}
      </div>
    </div>
  );
};

export default index;


  return 

