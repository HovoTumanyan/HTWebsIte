import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <section>
        <h2>1. Introduction</h2>
        <p>
          We are committed to protecting your privacy. This policy explains what
          data we collect, how we use it, and outlines your rights regarding
          data protection in accordance with applicable laws.
        </p>
      </section>

      <section>
        <h2>2. What Data We Collect</h2>
        <p>
          When you visit our website, we use Google Analytics to automatically
          collect certain information, including:
        </p>
        <ul className="privacy-policy-list">
          <li>
            <strong>IP address</strong> (anonymized before processing)
          </li>
          <li>
            <strong>Browser and device information</strong>
          </li>
          <li>
            <strong>Approximate location</strong> (city, country)
          </li>
          <li>
            <strong>Visit duration and time</strong>
          </li>
          <li>
            <strong>
              Pages you visit and actions you perform on the website
            </strong>
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use the Data</h2>
        <p>We use data collected via Google Analytics for:</p>
        <ul>
          <li>
            <strong>Analyzing website traffic</strong>
          </li>
          <li>
            <strong>
              Improving website structure, functionality, and content
            </strong>
          </li>
          <li>
            <strong>Optimizing user experience</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Data Anonymization</h2>
        <p>
          Your IP address is anonymized before processing and storage to ensure
          compliance with European data protection regulations (GDPR).
        </p>
      </section>

      <section>
        <h2>5. Data Sharing with Third Parties</h2>
        <p>
          We share website traffic data with Google Analytics. This data is used
          solely for analysis and does not include personal information. You can
          review Google Analytics'{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>{" "}
          here.
        </p>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          Google Analytics uses cookies—small text files stored on your device
          to collect information about your website visit. You can disable
          cookies in your browser settings or use the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Opt-out Browser Add-on
          </a>{" "}
          to prevent Google Analytics from tracking your activity.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Request a copy of your data</strong>
          </li>
          <li>
            <strong>Delete or restrict the processing of your data</strong>
          </li>
          <li>
            <strong>
              Opt-out of using cookies via browser settings or the Google
              Analytics opt-out extension
            </strong>
          </li>
        </ul>
      </section>

      <section>
        <h2>8. How We Protect Your Data</h2>
        <p>
          Data collected via Google Analytics is secured using modern encryption
          methods and secure storage practices. We regularly update our security
          systems to safeguard user data.
        </p>
      </section>

      <section>
        <h2>9. Changes to the Policy</h2>
        <p>
          We reserve the right to update this privacy policy. Updates will be
          published on this page, and we encourage you to review its contents
          regularly.
        </p>
      </section>

      <section>
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions or comments about our privacy policy, please
          contact us at:{" "}
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&to=hovotumanyan@gmail.com"
            >
              hovotumanyan@gmail.com
            </a>
          </strong>
          .
        </p>
      </section>

      <footer>
        <p>
          <strong>Effective Date: January 3, 2025</strong>
        </p>
      </footer>
    </div>
  );
}
