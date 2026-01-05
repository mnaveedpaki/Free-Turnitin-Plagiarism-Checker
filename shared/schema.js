import { z } from "zod";

export const checkTextSchema = z.object({
  text: z.string().min(100, "Text must be at least 100 characters long"),
});

export const sentenceResultSchema = z.object({
  sentence: z.string(),
  similarity: z.number(),
  sources: z.array(
    z.object({
      url: z.string(),
      similarity: z.number(),
    })
  ),
  isPlagiarized: z.boolean(),
});

export const aiDetectionSchema = z.object({
  status: z.boolean(),
  aiWords: z.number().nullable(),
  fakePercentage: z.number().nullable(),
  isHuman: z.number().nullable(),
  textWords: z.number().nullable(),
  humanPercentage: z.number().optional().nullable(),
  error: z.string().optional(),
});

export const checkResultSchema = z.object({
  overallScore: z.number(),
  plagiarismPercentage: z.number(),
  totalSentences: z.number(),
  plagiarizedSentences: z.number(),
  results: z.array(sentenceResultSchema),
  aiDetection: aiDetectionSchema,
});
