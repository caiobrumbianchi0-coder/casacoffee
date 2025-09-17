import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getRecipeById } from '@/lib/recipe-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import FavoriteButton from '@/components/recipes/favorite-button';
import { Clock, Users, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = getRecipeById(params.id);

  if (!recipe) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === recipe.image);
  const imageUrl = placeholder?.imageUrl ?? 'https://picsum.photos/seed/placeholder/800/600';
  const imageHint = placeholder?.imageHint ?? 'coffee recipe';

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" passHref>
            <Button variant="ghost">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar ao catálogo
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2">
              <Image
                src={imageUrl}
                alt={recipe.name}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={imageHint}
              />
            </div>
            <div className="md:col-span-3">
              <CardHeader className="p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">
                    {recipe.name}
                  </CardTitle>
                  <FavoriteButton recipeId={recipe.id} />
                </div>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-headline font-semibold mb-4 text-foreground">Ingredientes</h3>
                    <ul className="space-y-2 list-disc list-inside text-foreground/90">
                      {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-semibold mb-4 text-foreground">Modo de Preparo</h3>
                    <ol className="space-y-3 list-decimal list-inside text-foreground/90">
                      {recipe.preparation.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
