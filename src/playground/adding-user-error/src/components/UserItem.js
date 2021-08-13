import styles from "./UserItem.module.css";
const UserItem = (props) => {
  return (
    <li className={styles.userItem}>
      <div>
        {props.user.username} {props.user.age}
      </div>
      <button onClick={props.deleteUser}>x</button>
    </li>
  );
};

export default UserItem;
