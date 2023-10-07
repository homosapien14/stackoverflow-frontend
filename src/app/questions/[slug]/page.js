"use client";
import Post from "@/components/post";

const Page = ({ params }) => {
  if (localStorage?.post) {
    localStorage?.removeItem("post");
  }
  const id = params.slug;
  return <Post id={id} />;
};
export default Page;
