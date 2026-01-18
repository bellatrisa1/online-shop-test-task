import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/store";
import { selectUser } from "../store/selectors";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 1,
          name: "Иван Иванов",
          email: "ivan@example.com",
        }),
      );
    }, 500);
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
}

export default Header;
