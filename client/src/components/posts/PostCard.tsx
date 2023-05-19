import { Posts } from '../../../types/posts.index';

function PostCard({ post }: { post: Posts }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;
