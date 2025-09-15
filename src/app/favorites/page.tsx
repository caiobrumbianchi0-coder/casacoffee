'use client';

import { useMemo } from 'react';
import Header from '@/components/layout/header';
import RecipeCard from '@/components/recipes/recipe-card';
import { useFavorites } from '@/hooks/use-favorites';
import { categories } from '@/lib/recipe-data';
import type { Recipe } from '@/lib/types';
import { Heart } from 'lucide-react';
import { Suspense } from 'react';

function FavoritesPageContent() {
  const { favorites } = useFavorites();
  
  const allRecipes = useMemo(() => categories.flatMap(c => c.recipes), []);
  
  const favoriteRecipes: Recipe[] = useMemo(() => {
    return allRecipes.filter(recipe => favorites.includes(recipe.id));
  }, [allRecipes, favorites]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
             <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Minhas Receitas Favoritas
            </h1>
          </div>

          {favoriteRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {favoriteRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-lg">
              <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Você ainda não tem receitas favoritas.</h3>
              <p className="mt-2 text-muted-foreground">Clique no coração de uma receita para adicioná-la aqui.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


export default function FavoritesPage() {
  return (
    <Suspense fallback={<div>Loading favorites...</div>}>
      <FavoritesPageContent />
    </Suspense>
  )
}
