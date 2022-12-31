import { useEffect, useState } from "react";
import { Header } from "./component/header";
import { useInView } from "./hook/use-in-view";
import "./services/unsplash";

function App() {
  const [ref, isVisible] = useInView();
  const [state, setState] = useState(5);

  useEffect(() => {
    isVisible && setState((x) => (x += 5));
  }, [isVisible, setState]);

  return (
    <div className="text-white bg-zinc-800">
      <main className="min-h-screen max-w-xl m-auto">
        <Header />
        <div className="flex flex-col gap-5 p-5">
          {[...Array(state)].map((x, i) => (
            <figure className="w-full" key={i}>
              <img
                alt=""
                className="w-full"
                src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQzNTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3MjQ2NzcxMg&ixlib=rb-4.0.3&q=80&w=400"
              />
            </figure>
          ))}
        </div>
        <div className="h-24 mb-5">Load More</div>
        {/* @ts-ignore */}
        <span ref={ref}>Listener</span>
      </main>
    </div>
  );
}

export default App;
