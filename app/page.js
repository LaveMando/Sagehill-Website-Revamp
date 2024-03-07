import Head from 'next/head';
import Image from 'next/image'
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
          <Image 
          src="/Sagehill color (white text) logo.png"
          width={120}
          height={50}
          />
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products & Services</a>
          <a href="/contact">Contact Us</a>
        </nav>

        <section className={styles.hero}>
          <h1>Technology 
            Simplified</h1>
          <p>Enabling 4IR through Data 
            Analytics</p>
          <button>Contact Us</button>
        </section>

        <section className={styles.aboutUs}>
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.aboutUsCard}>
        <h3>Our Mission</h3>
        <p>To assist individuals and organizations throughout the world to gain competitive advantage through the provision of innovative and simplified ICT business solutions that improve their profitability.</p>
      </div>
      <div className={styles.aboutUsCard}>
        <h3>Our Vision</h3>
        <p>To provide the business community with timely cost-effective and high-quality ICT products thereby maximizing wealth for stakeholders and other key stakeholders.</p>
      </div>
      <div className={styles.aboutUsCard}>
        <h3>Did You Know?</h3>
        <p>Sagehill Business Solutions is a wholly-owned Zimbabwean Company established in 2011 by an innovative team of highly motivated and energetic, young entrepreneurs with international experience.</p>
      </div>
    </div>
  </div>
</section>



<section className={styles.aboutSagehill}>
  <div className={styles.aboutSagehillContainer}>
    <div className={styles.aboutSagehillImage}>
      {/* Your image component goes here */}
    </div>
    <div className={styles.aboutSagehillContent}>
      <h2>About us</h2>
      <p>Sagehill is an enabler of 4$IR (the 4th Industrial Revolution)
        mainly focusing on digital transformation through business
        process automation. We offer a wide range of ICT Solutions
        including Mobile application development, Sagehill
        Hospital Management Information System, Enterprise
        Resource planning Software, Web Hosting and Web Design
        services, Consultancy Services as well Computer Hardware
        and Accessories Supply across Zimbabwe and Zambia. As 
        Sagehill we have partnered with organisations such as IBM
        and Palladium Accounting South Africa, UiPath, Microsoft,
        Eset, Sophos and Kasperky to assist in the goal to simplify
        technology.
      </p>
    </div>
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
