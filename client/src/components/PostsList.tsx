import { getPosts } from '../api/post.api';
import { useEffect, useState } from 'react';

function PostsList() {
  const [posts, setposts] = useState();

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await getPosts;
      console.log(res);
    };

    getAllPosts();
  }, []);

  return <div>index</div>;
}

export default PostsList;
