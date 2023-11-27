import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handelClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {!showItems && <span>⬇️</span>}
          {showItems && <span>⬆️</span>}
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
