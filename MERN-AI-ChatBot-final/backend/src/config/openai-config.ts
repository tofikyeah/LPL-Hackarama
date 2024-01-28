import { OpenAI } from "openai";

export const configureOpenAI = () => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORAGANIZATION_ID,
  });
  return openai;
};


