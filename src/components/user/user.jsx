import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/slice";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  return <b>{user?.name}</b>;
};
