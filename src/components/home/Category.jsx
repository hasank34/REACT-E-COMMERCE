import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { useEffect } from "react";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  // console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="min-w-[150px] max-w-[180px] max-h-screen bg-gray-100 p-4">
      <h2 className="text-center text-xl font-bold pb-1 border-b">KATEGORİ</h2>
      {categories.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg cursor-pointer p-2 hover:bg-gray-200"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
