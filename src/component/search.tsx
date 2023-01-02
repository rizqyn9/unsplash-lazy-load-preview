import { useState } from "react";
import { useUnsplashQuery } from "../features/unsplash-grid-image/use-unsplash-query";

function Search() {
  const { search } = useUnsplashQuery();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    search(searchValue);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form
      className="w-full flex gap-4 container px-4"
      onSubmit={handleOnSubmit}
    >
      <input
        className="px-4 py-2 rounded-3xl flex-1 text-black"
        placeholder="search..."
        name="search"
        value={searchValue}
        onChange={handleOnChange}
      />
      <button className="" type="submit">
        Submit
      </button>
    </form>
  );
}

export { Search };
