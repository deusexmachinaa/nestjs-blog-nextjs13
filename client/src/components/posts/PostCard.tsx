import { Posts } from '../../../types/posts.index';

function PostCard({ post }: Posts) {
  return <div>{post}</div>;
}

export default PostCard;
