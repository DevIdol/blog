import { useEffect } from "react";
import PostList from "../../components/posts/postsList";
import { getAllPosts } from "../../features/posts/postSlice";
import { useAppDispatch } from "../../app/hooks";

const PostPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return <PostList />;
};

export default PostPage;
