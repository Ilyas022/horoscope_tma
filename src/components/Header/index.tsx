import css from './Header.module.css'

export interface HeaderProps {
	language: 'ru' | 'en'
	setLanguage: (lang: 'ru' | 'en') => void;
}

function Header({language, setLanguage}: HeaderProps) {
	
	function onlanguageChange() {
		setLanguage(language === 'ru' ? 'en' : 'ru')
	}

	return (
		<header>
			<div className={css.container}>
				<p className={css.title}>ISHoroscope</p>
				<div className={css.langBar}>
					<p>{language === 'ru' ? 'Сменить язык': 'Change lang'}</p>
					<button type='button' onClick={onlanguageChange} className={css.btn}>{language}</button>
					
				</div>

			</div>
		</header>
	)
}

export default Header