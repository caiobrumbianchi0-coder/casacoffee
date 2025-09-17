'use server';

import { generateHelpfulRecipeTips } from '@/ai/flows/generate-helpful-recipe-tips';
import { answerRecipeQuestion } from '@/ai/flows/recipe-qa-flow';
import type { Recipe } from '@/lib/types';

interface ActionResult {
  tip?: string;
  answer?: string;
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

export async function askRecipeQuestionAction(recipe: Recipe, question: string): Promise<ActionResult> {
  try {
    const { answer } = await answerRecipeQuestion({
      recipeName: recipe.name,
      ingredients: recipe.ingredients.join(', '),
      preparation: recipe.preparation.join('\n'),
      question,
    });
    return { answer };
  } catch (error) {
    console.error('Error answering question:', error);
    return { error: 'Failed to get an answer. Please try again later.' };
  }
}
