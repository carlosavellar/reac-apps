import classes from "./UserList.module.css";
import Card from "./../UI/Card";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return <UserItem key={Math.random()} user={user} />;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
