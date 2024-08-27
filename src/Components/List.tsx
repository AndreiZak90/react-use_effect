import { useEffect } from "react";

interface itemListProp {
  getData: () => void;
  use: {
    id: number;
    name: string;
  }[];
  click: (info: { id: number; name: string }) => void;
}

export default function List({ getData, use, click }: itemListProp) {
  useEffect(() => {
    getData();
  }, []);

  console.log(use);

  return (
    <div className="list_box">
      <ul className="list_main_box">
        {use.map((item) => (
          <li className="item_list" key={item.id} onClick={() => click(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
