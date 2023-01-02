import { Search } from "./search";

export function Header() {
  return (
    <header className="px-5 py-3 flex flex-col gap-6 font-semibold text-xl sticky top-0 bg-zinc-800">
      <div className="flex justify-between px-4 items-center">
        <h1>Kodegiri</h1>
        <nav>
          <a
            href="https://rizqydev.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="italic text-md"
          >
            @rizqyn9
          </a>
        </nav>
      </div>
      <Search />
    </header>
  );
}
