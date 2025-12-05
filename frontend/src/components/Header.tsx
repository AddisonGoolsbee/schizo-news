import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white border-b border-neutral-200 font-serif">
      <div className="relative mx-auto px-5 py-6 pb-4 md:px-10">
        <Link
          to="/about"
          className="absolute right-4 sm:right-8 top-4 sm:top-5 text-sm sm:text-base font-medium uppercase tracking-wider text-neutral-500 transition-colors duration-150 hover:text-neutral-700"
        >
          About
        </Link>
        <h1 className="mt-4 sm:m-0 text-center text-3xl font-serif font-normal leading-tight sm:text-6xl">
          <Link to="/" className="no-underline font-bold">
            Schizo News
          </Link>
        </h1>
        <p className="mt-2 text-center text-base text-neutral-500 font-serif" aria-live="polite">
          Updated every few hours by certified FREAKS
        </p>
      </div>
    </div>
  );
}
