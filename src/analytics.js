import ReactGA from "react-ga4";

export const logEvent = (action, category, label, value) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};
