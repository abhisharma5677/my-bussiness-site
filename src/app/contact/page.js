import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import style from "@/app/styles/contact.module.css"

const page = () => {
  return (
    <div>
      <h1 className={style.contactUs_msg}>CONTACT US</h1>
      <ContactCard />

      <ContactForm />

      <div className={style.map_class}>
        <div>
          <h1>OUR LOCATION</h1>
          <p>Aonla - Shahabad Road,<br></br> Hardaspur, Uttar Pradesh 243303</p>
          <h3>Email :- imabhishek5677@gmail.com</h3>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344920.7331589727!2d78.93383630353094!3d28.451201145986293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ab73fc87e984f%3A0xf3602bc43f44d2c8!2sPandit%20Misthan%20Bhandar!5e0!3m2!1sen!2sin!4v1685364806882!5m2!1sen!2sin"
          width={1720} height={800} className={style.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default page