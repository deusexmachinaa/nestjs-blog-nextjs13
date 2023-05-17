import { Posts } from '../../../types/posts.index';

function PostCard({ post }: Posts) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default PostCard;
