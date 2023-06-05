import { getPost, getPosts } from '../../api/post.api';
import { useEffect, useState } from 'react';
import { Posts } from '../../../types/posts.index';
import PostCard from './PostCard';

function PostsList() {
  const [posts, setposts] = useState<Posts[]>([]);
  //한개만 출력할때
  // const [posts, setposts] = useState<Posts>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await getPosts();
        // const res = await getPost();
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
    <div className="items-center justify-between mx-auto self-center max-w-screen-xl">
      <h1 className="font-bold text-6xl self-center max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        Posts
      </h1>
      <div className="grid grid-cols-3 pt-4">
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post: Posts) => <PostCard key={post.id} post={post} />)
          // 한개만 출력하기
          // <PostCard key={posts?.id} post={posts!} />
        )}
      </div>
    </div>
  );
}

export default PostsList;
