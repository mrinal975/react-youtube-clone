import { ChevronLeft } from "lucide-react";
import { Button } from "./Button";
type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

function CategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryPillsProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3
      transitive-transform w-[max-content]"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "dark" : "default"}
            className="px-3 py-1 rounded-lg whitespace-nowrap"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 
        bg-gradient-to-r from-white  from-50%
        to-transparent w-24 h-full"
      >
        <Button
          variant="ghost"
          size="icon"
          className="h-full aspect-square w-auto p-1.5"
        >
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
