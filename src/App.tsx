import CategoryPills from "./components/CategoryPills";
import PageHeader from "./layouts/PageHeader";
import { categories } from "./data/home";
function App() {
  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid gris-cols-[auto,1fr] flex-grow-1 overflow-auto"></div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} />
        </div>
      </div>
    </>
  );
}

export default App;
