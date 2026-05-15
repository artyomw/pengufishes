import { Link } from "react-router-dom";
export function Header() {

  return (
    <header className="bg-sky-600">
      <div className="max-w-300 mx-auto px-3 sm:px-4">
        <div className="flex gap-5 items-center justify-between py-6 ">
          <Link
            to={'/'}
            style={{ fontFamily: 'var(--font-dicor)' }}
            className="text-[30px] text-white"
            href="">
            FISH
          </Link>



        </div>
      </div>
    </header>
  )
}
