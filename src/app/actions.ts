'use server';

import { generateHelpfulRecipeTips } from '@/ai/flows/generate-helpful-recipe-tips';
import type { Recipe } from '@/lib/types';

interface ActionResult {
  tip?: string;
  error?: string;
}

export async function getAITipAction(recipe: Recipe): Promise<ActionResult> {
  try {
    const { tip } = await generateHelpfulRecipeTips({
      recipeName: recipe.name,
      ingredients: recipe.ingredients.join(', '),
      preparation: recipe.preparation.join('\n'),
    });
    return { tip };
  } catch (error) {
    console.error('Error generating AI tip:', error);
    return { error: 'Failed to generate a tip. Please try again later.' };
  }
}
