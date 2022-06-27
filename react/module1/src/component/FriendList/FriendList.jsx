import React from "react";
import style from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ avatar, name, id, isOnline }) => (
      <li className={style.item} key={id}>
        <span
          className={isOnline ? style.statusOnline : style.statusOffline}
        ></span>
        <img
          className={style.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;
