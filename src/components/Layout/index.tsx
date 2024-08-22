import { Outlet } from "react-router-dom"
import Header from "../Header"
import { LangType } from "../../types/langTypes"

interface LayoutProps {
	lang: LangType
	setLang: (lang: LangType) => void
}

function Layout({lang,setLang}: LayoutProps) {

	return (
		<>
			<Header language={lang} setLanguage={setLang} />
			<Outlet />
		</>
	)
}

export default Layout