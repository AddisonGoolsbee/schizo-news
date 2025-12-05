import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const creditLine = useMemo(() => {
    const names = ["Addison Goolsbee", "NAME REDACTED"];
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    return shuffled.map((name) => {
      if (name === "Addison Goolsbee") {
        return (
          <a
            key={name}
            href="https://addisongoolsbee.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-neutral-500 underline"
          >
            {name}
          </a>
        );
      }
      return <span key={name}>{name}</span>;
    });
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 font-serif md:px-10">
      <p className="mt-4 leading-relaxed">Huh? WHO SAID THAT?</p>
      <p className="mt-4 leading-relaxed">
        Welcome to Schizo News. We felt like the media was LYING to you and took matters into our own hands.
      </p>
      <p className="mt-4 leading-relaxed">
        Made with ambivalence by {creditLine[0]} <span className="px-1">&</span> {creditLine[1]}
      </p>
      <p className="mt-4 text-base text-neutral-500">
        <Link to="/" className="font-semibold underline">
          Head back home
        </Link>
      </p>
    </main>
  );
}
