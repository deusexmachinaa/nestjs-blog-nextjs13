import { getPosts } from '../api/post.api';
import { useEffect, useState } from 'react';
import { Posts } from '../../types/posts.index';

function PostsList() {
  const [posts, setposts] = useState<Posts[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await getPosts();
        const { data } = res;
        setposts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setloading(false);
      }
    };

    getAllPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post: Posts) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostsList;
