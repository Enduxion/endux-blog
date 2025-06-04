import { useEffect } from "react";
import ReactQuill from "react-quill";
import { getPosts } from "../database/database";

const Post = () => {
  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
      // You can set the posts to state or do something with them
    }).catch((error) => {
      console.error("Error fetching posts:", error);
    });
  }, []);
  return (
    <>
    </>
  );
}

export default Post;