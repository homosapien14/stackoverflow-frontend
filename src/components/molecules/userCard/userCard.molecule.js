import moment from "moment";
import Link from "next/link";

import "./userCard.css";

const UserCard = ({
  created_at,
  user_id,
  username,
  dateType,
  float,
  backgroundColor,
}) => {
  return (
    <>
      <div
        className="owner"
        style={{ float: float, backgroundColor: backgroundColor }}
      >
        <div className="user-block fc-black-500">
          <div className="action-time">
            {dateType ? dateType : "asked"} {moment(created_at).fromNow(true)}{" "}
            ago
          </div>
          <div className="user-logo">
            <Link className="user-link" href={`/users/${user_id}`}>
              <div className="logo-wrapper">
                <img
                  alt="user_logo"
                  src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                />
              </div>
            </Link>
          </div>
          <div className="user-profile">
            <Link
              className="user-profile-link fc-blue-600"
              href={`/users/${user_id}`}
            >
              {username}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
