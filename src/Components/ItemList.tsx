interface itemListProp {
  info:
    | {
        id: string;
        name: string;
      }
    | undefined;
  fun: typeof Function;
}

export default function ItemList({ info, fun }: itemListProp) {
  if (info === undefined) return;

  const clickUser = () => {
    fun(info.id);
    console.log(info.id);
  };
  return (
    <li className="item_list" id={info.id} onClick={clickUser}>
      {info.name}
    </li>
  );
}
