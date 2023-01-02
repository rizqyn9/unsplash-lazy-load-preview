import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./component/header";
import { ImagePreview } from "./features/image-preview";
import { UnsplashGridImage } from "./features/unsplash-grid-image";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-white m-auto w-screen">
        <main className="min-h-screen max-w-xl m-auto">
          <Header />
          <UnsplashGridImage />
          <ImagePreview />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
