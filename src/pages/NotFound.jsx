import { useLanguage } from '../localization.jsx';

export default function NotFound() {
  const { t } = useLanguage();
  return <h1>{t('notFound')}</h1>;
}
