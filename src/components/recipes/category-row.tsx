import type { Category } from '@/lib/types';
import RecipeCard from './recipe-card';

interface CategoryRowProps {
  category: Category;
}

export default function CategoryRow({ category }: CategoryRowProps) {
  if (category.recipes.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <category.icon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">
          {category.name}
        </h2>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mb-4">
          {category.recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
