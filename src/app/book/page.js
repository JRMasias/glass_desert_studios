import { roboto_s } from "@/app/variables/fonts";
import Image from "next/image";
import singer1 from "@/../public/images/singer.jpeg";
import singer2 from "@/../public/images/guitar_singer.jpeg";

export default function Book() {
  return (
    <main className="w-full max-w-5xl mx-auto text-white flex flex-col justify-center items-center">
      <p className="text-center text-3xl lg:text-5xl purple_color">
        Get a quote for service(s) needed
      </p>
      <Image
        src={singer1}
        alt="Singer recording at Glass Desert Studios"
        width={1152}
        height={768}
        className="rounded-lg my-4 md:hidden"
      />
      <Image
        src={singer2}
        alt="Singer recording at Glass Desert Studios"
        width={1152}
        height={768}
        className="rounded-lg my-4 hidden md:block"
      />
      <form
        className={`flex flex-col justify-center items-start gap-8 ${roboto_s.className} background_darker_purple p-4 md:rounded-lg border-[1px] border_dark_purple pink_color`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 w-full">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="background_dark_blue border-[1px] border_blue rounded-md w-full px-2 py-1"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="background_dark_blue border-[1px] border_blue rounded-md w-full px-2 py-1"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 w-full">
          <label htmlFor="service">Select service:</label>
          <select
            name="service"
            id="service"
            className="background_dark_blue border-[1px] border_blue rounded-md green_color px-2 py-1"
            required
          >
            <option value="record">Record Audio</option>
            <option value="edit">Edit Audio</option>
            <option value="mix">Mix Audio</option>
            <option value="master">Master Audio</option>
            <option value="post_production">Post-production</option>
            <option value="foley">Foley</option>
            <option value="multiple_services">Multiple services needed</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-start w-full">
          <label htmlFor="message" className="blue_color">
            Tell us about your project:
          </label>
          <textarea
            name="message"
            id="message"
            className="background_dark_blue border-[1px] border_blue w-full rounded-md px-2 py-1"
            rows={5}
          />
        </div>
        <button type="submit" className="self-center form_button">
          Submit
        </button>
      </form>
    </main>
  );
}
