import { categories } from "../../data/tabs";
import { useSearchParams } from "react-router-dom";

export function Categories() {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex gap-2 p-4 ">
      {categories.map(item => (
        <button
          className="px-2 py-1 text-white "
          key={item}
          onClick={() => setSearchParams({ category: item })}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
