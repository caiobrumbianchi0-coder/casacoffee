'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating helpful recipe tips using AI.
 *
 * It includes:
 * - `generateHelpfulRecipeTips`: The main function to generate recipe tips.
 * - `GenerateHelpfulRecipeTipsInput`: The input type for the function, defining the recipe details.
 * - `GenerateHelpfulRecipeTipsOutput`: The output type, providing the generated tip.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHelpfulRecipeTipsInputSchema = z.object({
  recipeName: z.string().describe('The name of the recipe.'),
  ingredients: z.string().describe('A list of ingredients used in the recipe.'),
  preparation: z.string().describe('The preparation or cooking method of the recipe.'),
});
export type GenerateHelpfulRecipeTipsInput = z.infer<typeof GenerateHelpfulRecipeTipsInputSchema>;

const GenerateHelpfulRecipeTipsOutputSchema = z.object({
  tip: z.string().describe('A helpful and relevant tip for the recipe.'),
});
export type GenerateHelpfulRecipeTipsOutput = z.infer<typeof GenerateHelpfulRecipeTipsOutputSchema>;

export async function generateHelpfulRecipeTips(
  input: GenerateHelpfulRecipeTipsInput
): Promise<GenerateHelpfulRecipeTipsOutput> {
  return generateHelpfulRecipeTipsFlow(input);
}

const generateHelpfulRecipeTipsPrompt = ai.definePrompt({
  name: 'generateHelpfulRecipeTipsPrompt',
  input: {schema: GenerateHelpfulRecipeTipsInputSchema},
  output: {schema: GenerateHelpfulRecipeTipsOutputSchema},
  prompt: `You are an expert recipe assistant. Generate a helpful and relevant tip for the following recipe, based on its ingredients and preparation method.

Recipe Name: {{{recipeName}}}
Ingredients: {{{ingredients}}}
Preparation: {{{preparation}}}

Tip:`,
});

const generateHelpfulRecipeTipsFlow = ai.defineFlow(
  {
    name: 'generateHelpfulRecipeTipsFlow',
    inputSchema: GenerateHelpfulRecipeTipsInputSchema,
    outputSchema: GenerateHelpfulRecipeTipsOutputSchema,
  },
  async input => {
    const {output} = await generateHelpfulRecipeTipsPrompt(input);
    return output!;
  }
);
