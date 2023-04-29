import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(({ id, isOnline, avatar, name  }) => (
            <FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline = {isOnline}
            />
                          
            )
            )}
</ul>
)
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
export default FriendList;