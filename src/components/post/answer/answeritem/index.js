import { useSelector, useDispatch } from "react-redux";
import { deleteAnswer } from "@/redux/answers/answers.slice";
import Link from "next/link";
import UpVote from "@/assets/upVote";
import DownVote from "@/assets/downVote";
import UserCard from "@/components/molecules/userCard/userCard.molecule";

import "./answeritem.css";

const AnswerItem = ({ answer }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.posts.post);

  console.log(answer);
  const { body, user_id, gravatar, _id, createdAt, post_id } = answer;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteAnswer(_id));
  };

  return (
    <>
      <div className="answer-layout ml-20 bg-white p-2 rounded-md">
        <div className="vote-cell">
          <div className="vote-container">
            <button
              className="vote-up"
              title="This answer is useful (click again to undo)"
            >
              <UpVote />
            </button>
            <div className="vote-count fc-black-500">0</div>
            <button
              className="vote-down"
              title="This answer is not useful (click again to undo)"
            >
              <DownVote />
            </button>
          </div>
        </div>
        <div className="answer-item">
          <div className="answer-content text-black">{body}</div>
          <div className="answer-actions">
            <div className="action-btns">
              <div className="answer-menu">
                <Link
                  className="answer-links"
                  title="short permalink to this question"
                  href="/"
                >
                  share
                </Link>
                <Link
                  className="answer-links"
                  title="Follow this question to receive notifications"
                  href="/"
                >
                  follow
                </Link>
                {!auth.loading &&
                  auth.isAuthenticated &&
                  user_id._id === auth.user.id && (
                    <Link
                      className="s-link s-link__danger"
                      style={{ paddingLeft: "4px" }}
                      title="Delete the answer"
                      onClick={handleDelete}
                      href={`/questions/${post_id._id}`}
                    >
                      delete
                    </Link>
                  )}
              </div>
            </div>
            <UserCard
              created_at={createdAt}
              user_id={user_id._id}
              gravatar={gravatar}
              username={user_id.username}
              dateType={"answered"}
              backgroundColor={"transparent"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerItem;
