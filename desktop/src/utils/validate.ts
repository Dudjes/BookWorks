import { ZodIssue, ZodSchema } from "zod";

export function validate<T>(
  schema: ZodSchema<T>,
  data: unknown
):
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((issue: ZodIssue) => {
    const field = issue.path[0] as string;
    errors[field] = issue.message;
  });

  return { success: false, errors };
}