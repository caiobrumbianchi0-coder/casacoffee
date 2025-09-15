import type { Category } from '@/lib/types';
import RecipeCard from './recipe-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {category.recipes.map((recipe, index) => (
            <CarouselItem key={index} className="pl-4 basis-auto">
              <RecipeCard recipe={recipe} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
