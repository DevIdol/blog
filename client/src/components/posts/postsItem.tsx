import { PostModel } from "../../features/posts/postSlice";

const PostItem = (props: { post: PostModel; showDetail: boolean }) => {
  let post = props.post;
  return (
    <div>
      <h1>Title: {post.title}</h1>
      <h3>Description: {post.description}</h3>
    </div>
  );
};

export default PostItem;
