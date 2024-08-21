import ItemList from "./ItemList";

interface itemListProp {
  use: {
    id: string;
    name: string;
  }[];
  click: FunctionConstructor;
}

export default function List({ use, click }: itemListProp) {
  console.log(use);
  return (
    <div className="list_box">
      <ul className="list_main_box">
        {use.map((item, id) => (
          <ItemList key={id} info={item} fun={click} />
        ))}
      </ul>
    </div>
  );
}
