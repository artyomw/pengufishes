import { categories } from "../../data/tabs";
import { useSearchParams } from "react-router-dom";

export function Categories() {

  const [searchParams, setSearchParams] = useSearchParams();
  const catigory = searchParams.get('category');
  console.log(catigory)
  return (
    <div className="flex gap-2 p-4 ">
      {categories.map(item => (
        <button
          style={catigory == item ? { background: `var(--${catigory})`, color: 'black' } : null}
          className="px-2 py-1 text-white rounded-xl capitalize"
          key={item}
          onClick={() => setSearchParams({ category: item })}
        >
          {item}
        </button>
      ))
      }
    </div >
  )
}
