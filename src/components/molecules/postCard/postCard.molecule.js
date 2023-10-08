import Link from "next/link";
import UserCard from "../userCard/userCard.molecule";

import "./postCard.css";

const PostCard = ({ post }) => {
  const { upvotes, downvotes, createdAt, _id, title, body, numberOfAnswers } =
    post;
  const upvote_count = upvotes.length;
  const downvotes_count = downvotes.length;
  const user = post.user_id;
  const user_id = user._id;
  const { username } = user;
  const handleSubString = (body) => {
    if (body.length < 150) {
      return body;
    } else {
      return body.substring(0, 150);
    }
  };
  const VoteUp = (
    <div className="vote answer text-lg">
      <span className="vote-count">{upvote_count}</span>
      <div className="count-text">Upvotes</div>
    </div>
  );

  const VoteDown = (
    <div className="vote downvote  text-lg">
      <span className="vote-count">{downvotes_count}</span>
      <div className="count-text">Downvotes</div>
    </div>
  );
  const answer = (
    <div className="vote  text-lg">
      <span className="vote-count text-black">{numberOfAnswers}</span>
      <div className="count-text text-black">answers</div>
    </div>
  );
  return (
    <div className="posts bg-white flex  shadow-md rounded-lg overflow-hidden">
      <div className="stats-container fc-black-500">
        <div className="stats">
          {VoteUp}
          {answer}
          {VoteDown}
        </div>
      </div>
      <div className="summary ">
        <h3 className="text-3xl font-semibold mb-2">
          <Link
            href={`/questions/${_id}`}
            className="text-blue-500 hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-gray-600 mb-4">
          <div>{handleSubString(body)}</div>
        </div>
        <div className="">
          <UserCard
            created_at={createdAt}
            user_id={user_id}
            username={username}
            float={"right"}
            backgroundColor={"transparent"}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
