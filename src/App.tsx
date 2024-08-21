import { useEffect, useState } from "react";
import "./App.css";
import Details from "./Components/Details";
import List from "./Components/List";
const usersURL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

function App() {
  const [listUsers, setListUsers] = useState<object[]>([]);
  const [user, setUser] = useState<Object>();
  const [elem, setElem] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      fetch(usersURL)
        .then((response) => response.json())
        .then((data) => setListUsers(data));
    }, 1000);
  }, [usersURL]);

  const cliItem = (el: number) => {
    setElem(el);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${elem}.json`
      )
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, 100);
  }, [elem]);

  console.log(listUsers);
  return (
    <>
      <List use={listUsers} click={cliItem} />
      <Details us={user} />
    </>
  );
}

export default App;
