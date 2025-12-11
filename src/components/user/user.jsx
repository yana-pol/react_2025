import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/slice";

export const User = ({ userId }) => {
  const user = useSelector((state) => {
    return selectUserById(state, userId);
  });

  return <div>{user.name}</div>;
};
