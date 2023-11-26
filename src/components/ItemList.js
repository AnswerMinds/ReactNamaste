import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log("item", items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2  border-b-2 text-left flex"
          >
            <div className="w-9/12">
              <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price / 100}</span>
              </div>
              <div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
            </div>
            <div className="w-3/12 p-4">
              <button className="p-2 bg-black text-white shadow-lg absolute  mx-13 rounded-lg ">
                Add +
              </button>

              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
