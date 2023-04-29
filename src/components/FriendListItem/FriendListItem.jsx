import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({name, avatar, isOnline}) => {
  return (
   <li className={css.item}>
        <span className={isOnline? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
   </li>
  )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
export default FriendListItem;