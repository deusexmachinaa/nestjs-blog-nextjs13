import { Posts } from '../../../types/posts.index';

function PostCard({ post }: { post: Posts }) {
  const { title, content }: { title: string; content: string } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default PostCard;
