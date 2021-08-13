import UsersList from "./UsersList";
import Box from "./box/Box";
import styles from "./UsersList.module.css";

const Users = (props) => {
  const userDeletation = (e) => {
    console.log(e.timestamp);
  };

  const userListDelete = (e) => {
    console.log(e.timestamp);
  };

  return (
    <Box>
      <div className={styles.box}>
        <div>
          <UsersList users={props.users} onDelete={props.onDeleteUser} />
        </div>
      </div>
    </Box>
  );
};

export default Users;
