import { getPosts } from '../../api/post.api';
import { useEffect, useState } from 'react';
import { Posts } from '../../../types/posts.index';
import PostCard from './PostCard';

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
        posts.map((post: Posts) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default PostsList;
