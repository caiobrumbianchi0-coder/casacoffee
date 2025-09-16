import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Recipe } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);
  const imageUrl = placeholder?.imageUrl ?? 'https://picsum.photos/seed/placeholder/600/400';
  const imageHint = placeholder?.imageHint ?? 'coffee';

  return (
    <Link href={`/recipes/${recipe.id}`} className="block w-64 flex-shrink-0 group">
      <Card className="overflow-hidden h-full transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1 border-transparent hover:border-primary/20">
        <CardHeader className="p-0">
          <div className="relative h-80">
            <Image
              src={imageUrl}
              alt={recipe.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
              sizes="256px"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold font-headline leading-tight truncate">
            {recipe.name}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
