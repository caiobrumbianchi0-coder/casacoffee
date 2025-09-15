import type { LucideIcon } from 'lucide-react';

export interface Recipe {
  id: string;
  name: string;
  image: string;
  prepTime: string;
  servings: string;
  ingredients: string[];
  preparation: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  recipes: Recipe[];
}
