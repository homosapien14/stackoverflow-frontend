import "./vote.css";

const VoteCell = ({ answerCount, commentCount }) => {
  return (
    <div className="vote-cell text-gray-500 p-4">
      <div className="flex flex-col justify-between items-center">
        <div className="vote text-center">
          <span className="vote-count text-2xl">{answerCount}</span>
          <div className="count-text text-sm">answers</div>
        </div>
        <div className="vote text-center">
          <span className="vote-count text-2xl">{commentCount}</span>
          <div className="count-text text-sm">comments</div>
        </div>
      </div>
    </div>
  );
};

export default VoteCell;
