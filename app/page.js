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

<section className={styles.services}>
          <div className={styles.serviceCard}>
            <h3>Mobile App Development</h3>
            <p>We develop apps for businesses that are tailored for optimal performance, ease navigation, and user interaction.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Palladium Accounting</h3>
            <p>Sagehill is a a certified gold partner for Palladium Accounting. We deploy, set-up, implement, train and offer support for all Palladium Accounting Software products. Palladium Accounting Software offers a range of feature-rich Accounting Solutions to suit all types of organisations.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hospital Management System</h3>
            <p>The Sagehill Hospital Management Information System (HIS) is a modern solution that enables medical facilities to overcome the biggest challenges in healthcare today with the use of advanced technical yet easy to use modules.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Web Hosting</h3>
            <p>Do you want peace? Would you like stress-free hosting? At Sagehill, we make sure that your website is online 24-7, 365. As a reliable web hosting company in Zimbabwe, we combine security and reliability with affordability.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hardware & Accessories</h3>
            <p>We supply a wide range of high quality computer hardware and accessories specific to your business requirements. Wide range includes servers, laptops, tablets, Desktops , NAS Devices, Computer Accessories etc</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>ICT Consultancy</h3>
            <p>Our team of experts will help you streamline processes while enhancing flexibility, capacity, and efficiency. Use our in-depth knowledge and experience of advanced technology and industry's best practices to your advantage</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Sophos Cybersecurity</h3>
            <p>Synchronized Security against coordinated attacks. Solutions that share threat intelligence and talk to each other, managed through a single, centralized interface, from firewall to endpoint.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Web Development</h3>
            <p>Whether clean and simple or bold and interactive, every design element, illustration or digital piece produced from Sagehill is distinctively developed with latest technologies, highly skilled professional, and on-time delivery. Web Development includes: - Website Design - Social Media integration - Mobile Ready Design - Search Engine Optimisation</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Graphic Design</h3>
            <p>From the simplest to the most complicated of graphic designing tasks, be it logos, company profiles, even graphical web assets to name a few, we have you covered.</p>
          </div>
        </section>


        <section className={styles.contact}>
  <div className={styles.container}>
    <h2>Contact Us</h2>
    <form className={styles.contactForm}>
      <label htmlFor="fullName">Full Name</label>
      <input type="text" id="fullName" name="fullName" required />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</section>

      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy; 2023 Cybersecurity Company</p>
      </footer>
    </div>
  );
}
