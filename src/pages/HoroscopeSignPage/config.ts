import { SignType } from "../../types/horoscopeTypes";
import { ApiLangType } from "../../types/langTypes";

export async function getSignData(sign: string, language: ApiLangType) {
  const res = await fetch(import.meta.env.VITE_API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      language,
      period: "today",
      sign,
    }),
  });
  
  const data: SignType = await res.json();
  return data;
}
