import Head from 'next/head';
import styles from '../app/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyber Security Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products & Services</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <section className={styles.hero}>
          <h1>Protecting Businesses in the Digital Age</h1>
          <p>We are a leading cybersecurity company that helps businesses of all sizes protect their data and systems from cyberattacks.</p>
          <button>Learn More</button>
        </section>

        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Threat Detection & Response</h3>
              <p>We use the latest technology to identify and respond to cyber threats in real-time.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Security Awareness Training</h3>
              <p>We educate your employees on how to protect themselves from cyberattacks.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Vulnerability Management</h3>
              <p>We identify and patch vulnerabilities in your systems before they can be exploited.</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Our Clients Say</h2>
          <div className={styles.testimonial}>
            <p>"Cybersecurity Company has helped us to improve our security posture and protect our business from cyberattacks."</p>
            <p>- John Doe, CEO, Acme Corporation</p>
          </div>
          <div className={styles.testimonial}>
            <p>"I highly recommend Cybersecurity Company to any business that is serious about cybersecurity."</p>
            <p>- Jane Smith, IT Manager, XYZ Company</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Contact Us Today</h2>
          <p>Let us help you protect your business from cyberattacks.</p>
          <button>Get a Free Quote</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; 2023 Cybersecurity Company</p>
      </footer>
    </div>
  );
}
