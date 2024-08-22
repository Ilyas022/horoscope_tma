import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getSignData } from "./config";
import { horoscopeIcons } from "../../utils/horoscopeIcons";
import css from './HoroscopeSignPage.module.css'
import { SignType } from "../../types/horoscopeTypes";
import { getLangFromApiLang } from "../../utils/getLang";
import { HOME_PAGE_ROUTE } from "../../utils/routes";
import { HoroscopeSignPageProps } from "./types";


function HoroscopeSignPage({language}: HoroscopeSignPageProps) {
	const { sign } = useParams()
  const [signData, setSignData] = useState<SignType>();
	const iconNameField = getLangFromApiLang(language) + 'Name' as 'ruName' | 'enName'
	const navigate = useNavigate()

	useEffect(() => {
		if(!sign) return
    
		const fetchSignData = async () => {
			const data = await getSignData(sign, language);

			if(!data.sign) {
				navigate(HOME_PAGE_ROUTE)
			}
			
			setSignData(data);
    };

    fetchSignData();
	}, [sign, language])

	const signItem = useMemo(() => {
		return horoscopeIcons.find(item => item.enName.toLowerCase() === sign);
	}, [sign])

	return (
		<div className={css.container}>
			{signData && signItem &&  <div>
				<div className={css.signIcon}>
					<signItem.Icon size={60} />
				</div>
				<p className={css.signName}>{signItem[iconNameField]}</p>
				<p className={css.horoscope}>{signData.horoscope}</p>
			</div>}
		</div>
	)
}

export default HoroscopeSignPage