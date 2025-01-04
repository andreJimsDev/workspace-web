import { missingArgumentMessage } from "./validation.message";

export function assertArgumentNotEmpty(field: string, value?: string){
  if (!value || value.trim().length === 0) {
    throw new Error(missingArgumentMessage(field));
  }
}
