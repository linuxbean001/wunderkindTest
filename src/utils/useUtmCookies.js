import { useEffect } from 'react';
import Cookies from "universal-cookie";

const useUtmCookies = () => {
    let exparationDate = new Date();
    exparationDate.setDate(exparationDate.getDate() + 21);

    const cookieOptions = {
        expires: exparationDate
    };

    useEffect(() => {
        const cookies = new Cookies();
        const query = new URLSearchParams(window.location.search);
        const utmSource = query.get('utm_source');
        const utmMedium = query.get('utm_medium');
        const utmCampaign = query.get('utm_campaign');
        const utmContent = query.get('utm_content');
        const gclid = query.get('gclid');
        if(utmSource) {
            cookies.remove('utm_source');
            cookies.set('utm_source', utmSource, cookieOptions);
        }
        if(utmMedium) {
            cookies.remove('utm_medium');
            cookies.set('utm_medium', utmMedium, cookieOptions);
        }
        if(utmCampaign) {
            cookies.remove('utm_campaign');
            cookies.set('utm_campaign', utmCampaign, cookieOptions);
        }
        if(utmContent) {
            cookies.remove('utm_content');
            cookies.set('utm_content', utmContent, cookieOptions);
        }
        if(gclid) {
            cookies.remove('gclid');
            cookies.set('gclid', gclid, cookieOptions);
        }
    }, []);
};

export default useUtmCookies;