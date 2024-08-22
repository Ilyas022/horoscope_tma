
import { bindThemeParamsCSSVars, initNavigator, useThemeParams, useInitData } from '@telegram-apps/sdk-react';
import './App.css'
import { useIntegration } from '@telegram-apps/react-router-integration';
import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HoroscopeSignPage from './pages/HoroscopeSignPage';
import Layout from './components/Layout';
import { getLangForApi, getLangFromApiLang } from './utils/getLang';
import { ApiLangType, LangType } from './types/langTypes';
import { HOME_PAGE_ROUTE, SIGNS_PAGE_ROUTE } from './utils/routes';

function App() {
  const themeParams = useThemeParams();
  bindThemeParamsCSSVars(themeParams)

  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);
  const data = useInitData()

  const [language, setLanguage] = useState<ApiLangType>(getLangForApi((data?.user?.languageCode as 'en' | 'ru') || 'en'))
  const currentLang = getLangFromApiLang(language)
  
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);
  
  function onLanguageChange(lang: LangType) {
    const currentLang = getLangForApi(lang)
    setLanguage(currentLang)
  }
  
  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<Layout lang={currentLang} setLang={onLanguageChange}  />} >
          <Route index element={<HomePage lang={currentLang} />} />
          <Route path={`${SIGNS_PAGE_ROUTE}/:sign`} element={<HoroscopeSignPage language={language} />} />
          <Route path={'*'} element={<Navigate to={HOME_PAGE_ROUTE} />}/>
        </Route>

      </Routes>
    </Router>

  )
}

export default App
