import React, { useEffect } from "react";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading && <h1>Загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {users && users.map((user) => <p key={user.name}>{user.name}</p>)}
    </>
  );
};

export default UserList;
