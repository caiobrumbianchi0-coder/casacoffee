'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories as allCategories } from '@/lib/recipe-data';
import type { Category } from '@/lib/types';
import Header from '@/components/layout/header';
import CategoryRow from '@/components/recipes/category-row';

function HomePageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [categories] = useState<Category[]>(allCategories);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) {
      return categories;
    }
    return categories
      .map(category => ({
        ...category,
        recipes: category.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(category => category.recipes.length > 0);
  }, [categories, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-headline text-foreground">Nenhuma receita encontrada</h2>
              <p className="text-muted-foreground mt-2">Tente uma busca diferente.</p>
            </div>
          )}
          <div className="space-y-12">
            {filteredCategories.map(category => (
              <CategoryRow key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
