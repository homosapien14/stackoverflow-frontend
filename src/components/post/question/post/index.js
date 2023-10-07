import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "@/redux/posts/posts.slice";
import UserCard from "@/components/molecules/userCard/userCard.molecule";
import { redirect } from "next/navigation";

const PostCell = ({ post }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const { upvotes, downvotes, createdAt, _id, title, body, numberOfAnswers } =
    post;
  const upvote_count = upvotes.length;
  const downvotes_count = downvotes.length;
  const user = post.user_id;
  const user_id = user._id;
  const { username } = user;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(_id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="text-black">{body}</div>

      <div className="text-black">
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <Link
              title="Short permalink to this question"
              className=" text-blue-500 "
              href="/"
            >
              share
            </Link>
            <Link
              title="Follow this question to receive notifications"
              className=" text-blue-500 "
              href="/"
            >
              follow
            </Link>
            {!auth.loading &&
              auth.isAuthenticated &&
              user_id === auth.user.id && (
                <button
                  className="text-red-500"
                  onClick={handleDelete}
                  title="Delete the post"
                >
                  delete
                </button>
              )}
          </div>
          <UserCard
            created_at={createdAt}
            user_id={user_id}
            username={username}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCell;
