import { Button } from "./Button";
type CategoryPillsProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3
      transitive-transform w-[max-content]"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="dark"
            className="px-3 py-1 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
        {/* <Button className="py-1 px-3 rounded-lg whitespace-nowrap">
          Javascript
        </Button> */}
      </div>
    </div>
  );
}

export default CategoryPills;
