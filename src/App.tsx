import { useState } from 'react';
import './App.css'
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const user = { firstName: "Sarah" };
  const [messageCount, setMessageCount] = useState<number>(1);

  const handleIncrement = () => {
    setMessageCount(messageCount + 1);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("userGreeting", { firstName: user.firstName })}</p>
      <p>{t("newMessages", { count: messageCount })}</p>
      <p>{t("description")}</p>

      <p>
        <Trans i18nKey="termsText">
          I agree to the <a href="/terms">Terms of Service</a> and 
          <a href="/privacy">Privacy Policy</a>.
        </Trans>
      </p>

      <button onClick={handleIncrement}>{t("clickMe")}</button>
    </div>
  );
}



export default App;

