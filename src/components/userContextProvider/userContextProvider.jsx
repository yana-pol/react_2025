import { useMemo, useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext value={value}>{children}</UserContext>;
};
