import { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import { IsAnimation } from "../AppProvider/AnimationChecker";

export default function CookieBanner() {
  const [hasConsented, setHasConsented] = useState(false);
  const { setIsAnimation } = useContext(IsAnimation);

  const userAgrees = () => {
    setHasConsented(true);
  };

  useEffect(() => {
    const userConsent = Cookies.get("user-consent");
    if (userConsent === "true") {
      ReactGA.initialize(import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID);
      ReactGA.send("pageview");
    }
  }, [hasConsented]);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="user-consent"
        style={{
          display: "unset",
          background: "#242424",
          color: "#fff",
          fontSize: "14px",
          padding: "0px 10px ",
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%) translateY(1%)",
          borderRadius: "10px 10px 0 0",
          width: "73%",
          textAlign: "center",
          zIndex: "1000",
          height: "auto",
          border: "1px solid #ebe8e54d",
        }}
        contentStyle={{
          margin: "5px",
        }}
        buttonStyle={{
          background: "#4e503b",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "5px",
          padding: "8px 16px",
          margin: "5px 10px 15px 15px",
          width: "80px",
        }}
        declineButtonStyle={{
          background: "#8f8f8f",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "5px",
          padding: "8px 16px",
          margin: "5px 10px 15px 15px",
          width: "80px",
        }}
        expires={90}
        onAccept={userAgrees}
      >
        This website uses cookies to improve your experience. You can accept all
        cookies or reject non-essential. For more information, please visit our{" "}
        <Link
          onClick={() => setIsAnimation(false)}
          to="/privacy-policy"
          style={{ color: "#f1c40f", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
      </CookieConsent>
    </>
  );
}
