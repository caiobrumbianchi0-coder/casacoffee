'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering questions about a specific recipe.
 *
 * It includes:
 * - `answerRecipeQuestion`: The main function to answer a question.
 * - `RecipeQAInput`: The input type for the function, defining the recipe and the question.
 * - `RecipeQAOutput`: The output type, providing the generated answer.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeQAInputSchema = z.object({
  recipeName: z.string().describe('The name of the recipe.'),
  ingredients: z.string().describe('A list of ingredients used in the recipe.'),
  preparation: z.string().describe('The preparation or cooking method of the recipe.'),
  question: z.string().describe('The user\'s question about the recipe.'),
});
export type RecipeQAInput = z.infer<typeof RecipeQAInputSchema>;

const RecipeQAOutputSchema = z.object({
  answer: z.string().describe('A helpful and relevant answer to the user\'s question.'),
});
export type RecipeQAOutput = z.infer<typeof RecipeQAOutputSchema>;

export async function answerRecipeQuestion(
  input: RecipeQAInput
): Promise<RecipeQAOutput> {
  return recipeQAFlow(input);
}

const recipeQAPrompt = ai.definePrompt({
  name: 'recipeQAPrompt',
  input: {schema: RecipeQAInputSchema},
  output: {schema: RecipeQAOutputSchema},
  prompt: `You are an expert recipe assistant. A user has a question about the following recipe. Provide a clear and concise answer based only on the information provided.

Recipe Name: {{{recipeName}}}
Ingredients: {{{ingredients}}}
Preparation: {{{preparation}}}

User's Question: {{{question}}}

Answer:`,
});

const recipeQAFlow = ai.defineFlow(
  {
    name: 'recipeQAFlow',
    inputSchema: RecipeQAInputSchema,
    outputSchema: RecipeQAOutputSchema,
  },
  async input => {
    const {output} = await recipeQAPrompt(input);
    return output!;
  }
);
