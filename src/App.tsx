import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => alert(t('clickMe'))}>{t('clickMe')}</button>
    </div>
  );
}

export default App;
