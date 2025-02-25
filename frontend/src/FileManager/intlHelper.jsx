import { useIntl } from 'react-intl';

let intl;

export const IntlHelper = () => {
  intl = useIntl();
  return null;
};

export const getIntl = () => {
  if (!intl) {
    throw new Error('IntlHelper has not been initialized');
  }
  return intl;
};
