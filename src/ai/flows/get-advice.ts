'use server';
/**
 * @fileOverview An AI agent that provides advice on gender stereotypes in children's media.
 *
 * - getAdvice - A function that provides advice based on a role and topic.
 * - GetAdviceInput - The input type for the getAdvice function.
 * - GetAdviceOutput - The return type for the getAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetAdviceInputSchema = z.object({
  role: z.enum(['parent', 'teacher', 'caretaker']).describe("The user's role."),
  topic: z.string().describe('The question or topic the user wants advice on.'),
});
export type GetAdviceInput = z.infer<typeof GetAdviceInputSchema>;

const GetAdviceOutputSchema = z.object({
  advice: z.string().describe('The tailored advice for the given role and topic.'),
});
export type GetAdviceOutput = z.infer<typeof GetAdviceOutputSchema>;

export async function getAdvice(input: GetAdviceInput): Promise<GetAdviceOutput> {
  return getAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getAdvicePrompt',
  input: {schema: GetAdviceInputSchema},
  output: {schema: GetAdviceOutputSchema},
  prompt: `You are an expert in child development and media literacy, specializing in gender stereotypes.
A user identifying as a {{role}} is asking for advice.
Their question/topic is: "{{topic}}".

Based on this, provide concise, actionable advice. Ground your advice in the context of countering gender stereotypes for children.
Address the user directly in your response.`,
});

const getAdviceFlow = ai.defineFlow(
  {
    name: 'getAdviceFlow',
    inputSchema: GetAdviceInputSchema,
    outputSchema: GetAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
