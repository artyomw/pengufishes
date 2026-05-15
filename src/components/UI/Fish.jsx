import { useParams, useNavigate } from "react-router-dom"
import { fishes } from "../../data/fishs";

export function Fish() {
  const navigate = useNavigate()
  const { name } = useParams();
  console.log(name)

  const fish = fishes.find(item => item.name === name);

  if (!fish) return <h1>NOT FOUNDED</h1>
  return (
    <section className="py-10">
      <div className="max-w-300 mx-auto px-3 sm:px-4">
        <button
          onClick={() => navigate(-1)}
          style={{ fontFamily: 'var(--font-dicor)' }}
          className="bg-white rounded-2xl px-3 gap-1 py-1 flex items-center border border-black "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
          <span className="mr-3">
            Back
          </span>
        </button>
        <div className="flex flex-col md:flex-row gap-6 py-5">
          <div className="">
            <div
              style={{ background: `var(--${fish.category})` }}
              className=" sm:w-100 aspect-square  rounded-2xl relative mx-auto"
            >
              <div className="absolute right-5 top-5 px-2 py-1 rounded-2xl bg-white border border-black flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill={`var(--${fish.category})`} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2" /></svg>
                <h2 className="text-[14px]">{fish.category}</h2>
              </div>
            </div>
          </div>
          <div className="w-full space-y-5">

            <h1
              style={{ fontFamily: 'var(--font-dicor)' }}
              className="text-[50px] capitalize"
            >{fish.name}</h1>

            <div
              style={{ background: `var(--${fish.category})` }}
              className=" px-3 py-1.5 rounded-2xl inline-block ">
              {fish.category}
            </div>

            <div className="">
              <div className="flex items-center gap-1 text-[30px] font-semibold ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#5189ff" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64" /></svg>
                Loactions
              </div>

              <ul className="p-2 space-y-3">
                {fish.locations.map((item, index) => (
                  <li
                    key={index}
                    className="px-3 py-3 border border-gray-400 rounded-2xl flex items-center justify-between"
                  >
                    <div className=" flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#5189ff" d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341M12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.7 15.7 0 0 1-2.418 2.008l-.373.246l-.332.209l-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189l-.171-.109l-.373-.246a15.7 15.7 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1.636.89 3.095 2.057 4.296a14 14 0 0 0 2.314 1.885l.34.217q.158.097.289.174l.29-.174l.339-.217a14 14 0 0 0 2.314-1.885C16.11 12.096 17 10.636 17 9a5 5 0 0 0-5-5m0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2" /></g></svg>
                      <p className=" text-[14px] sm:text-[16px]" >{item.location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {item.bait.map((item, index) =>
                      (
                        <p
                          key={index}
                          className="rounded-xl  text-[11px] sm:text-[16px] px-1.5 sm:px-2 py-1 text-white bg-black cursor-pointer shadow-2xl"
                        >{item}</p>
                      ))}

                    </div>


                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div >
    </section >
  )
}
