import { useAppSelector } from "../../app/hooks";
import { PostModel, selectPosts } from "../../features/posts/postSlice";
import PostPage from "./postsItem";

const PostList = () => {
  const { posts } = useAppSelector(selectPosts);
  return (
    <div>
      Post List
      {posts.map((post: PostModel) => {
        return <PostPage key={post.id} post={post} showDetail={true} />;
      })}
    </div>
  );
};

export default PostList;
