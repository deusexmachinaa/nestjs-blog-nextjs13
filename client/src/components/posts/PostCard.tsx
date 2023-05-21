import { Posts } from '../../../types/posts.index';

function PostCard({ post }: { post: Posts }) {
  const {
    title,
    content,
    img,
  }: { title: string; content: string; img?: string } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default PostCard;
