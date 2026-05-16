import { Link, useSearchParams } from "react-router-dom";
import { fishes as list } from "../../data/fishs";
import { Categories } from '../UI/Categories'
import { useMemo, useState } from "react";

export function Fishs() {

  const [searchParams] = useSearchParams();

  const [value, setValue] = useState('')

  // const filteredByCategory = category
  //   ? list.filter(item => item.category === category)
  //   : list;


  // const filteredFishes = filteredByCategory.filter(item =>
  //   item.name.toLowerCase().includes(value.toLowerCase())
  // );

  // const filtered = useMemo(() => {
  //   const category = searchParams.get('category');
  //   return list.filter(item => {
  //     return (!category || item.category === category) && item.name.includes(value)
  //   })
  // }
  //   , [searchParams, value])

  const filtered = useMemo(() => {
    const category = searchParams.get('category');
    return list.filter(item => {
      return (category == null || category == 'all' || item.category == category) && item.name.includes(value);
    })
  }
    , [searchParams, value])



  return (
    <section className="py-10">
      <div className="max-w-300 mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row gap-2 p-4 rounded-2xl bg-sky-600 mb-5 items-center justify-between">

          <Categories />

          <input
            value={value}
            className="px-3 py-1 outline-0 bg-white rounded-2xl"
            onChange={(e) => setValue(e.target.value)}
            type="text"

          />
        </div>
        <>
          {filtered.length > 0
            ? (<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {filtered.map(item => (
                <Link
                  to={`/fish/${item.name}`}
                  key={item.id}
                  className="aspect-square rounded-2xl flex items-center justify-center text-center text-[13px] sm:text-[30px]"
                  style={{ background: `var(--${item.category})`, fontFamily: 'var(--font-dicor)' }}
                >

                  <h2>{item.name}</h2>
                </Link>
              ))}
            </div>)
            : <div className="w-full h-full flex items-center justify-center">
              <video src="/icons/notfounded.webm" loop autoPlay muted></video>
            </div>}
        </>
      </div>
    </section>
  );
}