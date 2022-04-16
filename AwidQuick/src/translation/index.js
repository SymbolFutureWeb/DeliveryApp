import i18n from 'i18n-js';

import fr from './fr.json';
import en from './en.json';

i18n.defaultLocale = 'fr';
i18n.fallbacks = true;
i18n.locale = 'fr';
i18n.translations = { en, fr };
// export function setLangue(langue) {
//   i18n.locale = langue;
// }
export default i18n;
