import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAllPosts } from "./postAPI";
import { RootState } from "../../app/store";

export interface PostModel {
  id: number;
  title: string;
  description: string;
}

export interface PostSate {
  posts: Array<PostModel>;
  loaded: boolean;
}

const initialState: PostSate = {
  posts: [
    {
      id: 1,
      title: "Title One",
      description: "Description",
    },
  ],
  loaded: false,
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (arg, thunkApi) => {
    let state: any = thunkApi.getState();
    if (!state.posts.loaded) {
      const response = await apiGetAllPosts();
      return response.data;
    } else {
      return state.posts.posts;
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loaded = true;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts;
export const selectPostById = (posts: Array<PostModel>, postId: number) =>
  posts.filter((post) => post.id === postId)[0];
export default postSlice.reducer;
