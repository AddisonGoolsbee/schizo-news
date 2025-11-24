import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-3xl px-5 py-6 md:px-10">
        <h1 className="m-0 text-center text-4xl font-serif font-normal leading-tight md:text-6xl">
          <Link to="/" className="no-underline font-bold">
            Schizo News
          </Link>
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500" aria-live="polite">
          REAL news brought to you hourly by CERTIFIED SCHIZOPHRENICS* 🧠‼️
        </p>
      </div>
    </div>
  );
}
