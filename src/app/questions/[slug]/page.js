import Post from "@/components/post";

export const metadata = {
  title: "Post",
};
const Page = ({ params }) => {
  if (typeof window !== "undefined" && localStorage?.post) {
    localStorage?.removeItem("post");
  }
  const id = params.slug;
  return <Post id={id} />;
};
export default Page;
