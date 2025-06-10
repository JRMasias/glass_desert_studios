import { roboto_s } from "../variables/fonts";

export default function Contact() {
  return (
    <main className="text-white flex flex-col justify-center items-center w-full max-w-5xl mx-auto">
      <p className="font-bold text-3xl lg:text-5xl green_color">Contact Us</p>
      <div
        className={`${roboto_s.className} font-thin flex flex-col justify-center items-center text-center gap-4 md:gap-8 lg:text-xl`}
      >
        <div className="pt-4">
          <p>Write to us or stop by at:</p>
          <div className="text-center purple_color">
            <p>Glass Desert Studios</p>
            <p>1234 Kings Meadow Rd.</p>
            <p>Austin, Tx 78745</p>
          </div>
        </div>
        <div className="background_darker_purple p-4 rounded-lg">
          <p>Give us a call during office hours:</p>
          <a
            href="tel:+15125550980"
            className="blue_color underline underline-offset-2"
          >
            512-555-0980
          </a>
          <p className="pt-8">Or shoot us an email:</p>
          <a
            href="mailto:gda@glassdesertstudios.com"
            className="blue_color underline underline-offset-2"
          >
            gda@glassdesertstudios.com
          </a>
        </div>
        <div>
          <p className="pb-4">Hours of Operation:</p>
          <ul>
            <li className="pink_color">Monday-Friday:</li>
            <li className="orange_color">10:00am - 10:00pm</li>
            <li className="pink_color">Saturday:</li>
            <li className="orange_color">9:00am - 11:00pm</li>
            <li className="pink_color">Sunday:</li>
            <li className="orange_color">Closed</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
