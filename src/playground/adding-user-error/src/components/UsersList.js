import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <UserItem key={user.id} user={user} onDeleteUser={props.onDelete} />
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
