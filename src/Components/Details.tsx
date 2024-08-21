interface usProp {
  us: {
    id: number;
    name: string;
    avatar: string;
    details: {
      city: string;
      company: string;
      position: string;
    };
  };
}

export default function Details({ us }: usProp) {
  console.log(us);
  if (us === undefined) return;
  return (
    <div className="details_box">
      <div className="details_card_user">
        <img src={us.avatar} className="card_img" />
        <h3 className="card_name">{us.name}</h3>
        <p className="card_info">city: {us.details.city}</p>
        <p className="card_info">company: {us.details.company}</p>
        <p className="card_info">position: {us.details.position}</p>
      </div>
    </div>
  );
}
