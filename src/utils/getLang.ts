import { ApiLangType, LangType } from "../types/langTypes"

export const getLangForApi = (lang: LangType) => {
	return lang === 'ru' ? 'original' : 'translated'
}

export const getLangFromApiLang = (lang: ApiLangType) => {
	return lang === 'original' ? 'ru' : 'en'
}