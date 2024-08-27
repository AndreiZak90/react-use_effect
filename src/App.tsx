import { useEffect, useState } from "react";
import "./App.css";
import Details from "./Components/Details";
import List from "./Components/List";
const usersURL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

interface propNumb {
  id: number;
  name: string;
}

function App() {
  const [listUsers, setListUsers] = useState([]);
  const [user, setUser] = useState();
  const [elem, setElem] = useState<number>();

  const getData = async () => {
    fetch(usersURL)
      .then((response) => response.json())
      .then((data) => {
        setListUsers(data);
      })
      .catch((err) => console.log(err));
  };
  const cliItem = (el: propNumb) => {
    console.log(el);
    setElem(el.id);
  };

  useEffect(() => {
    if (elem) {
      setUser(undefined);
      console.log(elem);
      setTimeout(() => {
        fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${elem}.json`
        )
          .then((response) => response.json())
          .then((data) => setUser(data));
      }, 0);
    }
  }, [elem]);

  console.log(listUsers);
  return (
    <>
      <List getData={getData} use={listUsers} click={cliItem} />
      <Details us={user} />
    </>
  );
}

export default App;
