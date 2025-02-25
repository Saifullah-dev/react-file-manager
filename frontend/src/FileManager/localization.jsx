import {IntlProvider} from "react-intl";
import turkish from './locales/tr-TR'
import english from './locales/en-US'
import {IntlHelper} from "./intlHelper";

const locales = {
  'tr-TR': turkish,
  'en-US': english,
}

const myCustomErrorFunction = () => null

// eslint-disable-next-line react/prop-types
const Localization = ({children, locale}) => {
  const currentLocale = locales[locale] || locales['tr-TR'];

  return (
    <IntlProvider
      locale={currentLocale.locale}
      messages={currentLocale.messages}
      onError={myCustomErrorFunction}
    >
      <>
        <IntlHelper/>
        {children}
      </>
    </IntlProvider>
  )
}

export default Localization
