import Image from "next/image";
import rickJess from "./rickjess.jpg";

const times = [
  { title: "Välkomna!", time: "15:30" },
  { title: "Vigsel", time: "16:00" },
  { title: "Mingel", time: "17:00" },
  { title: "Middag", time: "18:00" },
  { title: "Fest", time: "21:00" },
];

const toastmadames = [
  {
    name: "Fanny B",
    email: "Fannybaa@gmail.com",
    phone: "0709266262",
  },
  {
    name: "Josefin L",
    email: "Josefin.linusson@jagareforbundet.se",
    phone: "0734346147",
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-stretch h-screen">
      <Image
        placeholder="blur"
        className="md:h-full md:object-cover md:object-[30%,50%]"
        src={rickJess}
        alt="Rickard och Jessica håller handen och tittar glatt på varandra."
        title="Foto: Sofia Söderlund"
      />
      <div className="pt-8 pb-[calc(env(safe-area-inset-bottom)_+_32px)] md:py-20 px-5 md:px-10 lg:px-20 md:mx-auto font-light md:overflow-scroll">
        <h1 className="font-cursive text-6xl md:text-8xl text-center bg-gradient-to-r bg-clip-text from-[#70444D] to-[#D63D99] text-transparent mb-4 md:mb-10">
          Rickard & Jessica
        </h1>
        <section>
          <p>
            Vi ska gifta oss och vi vill att du ska vara med! Vigsel kommer ske
            i Rosenhills trädgård och efter vigseln kommer vi att mingla, äta
            middag och fira tillsammans.
          </p>
          <p className="mt-4">
            Den här sidan kommmer uppdateras fortlöpande med all information ni
            kan behöva.
          </p>
          <p className="mt-4 font-semibold">OSA senast 31 maj 2023</p>
          <ul className="mt-8">
            <li className="grid grid-cols-[max-content,1fr,max-content] items-baseline gap-4">
              <span className="font-bold">Plats</span>
              <hr className="border-dashed border-gray-400" />
              <span className="text-right">
                <a
                  className="underline decoration-dashed decoration-pink-600 text-pink-600"
                  href="https://rosenhill.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rosenhill
                </a>
                ,{" "}
                <a
                  className="underline decoration-dashed decoration-pink-600 text-pink-600"
                  href="https://www.google.com/maps/place/Rosenhills+Tr%C3%A4dg%C3%A5rd+och+Musteri/@59.2949802,17.7144241,17z/data=!3m1!4b1!4m9!3m8!1s0x465f748c916e19d7:0xda26f9f80fc77b0b!5m2!4m1!1i2!8m2!3d59.2949802!4d17.7166128!16s%2Fg%2F113fx_5yj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ekerö
                </a>
              </span>
            </li>
            <li className="grid grid-cols-[max-content,1fr,max-content] items-baseline gap-4">
              <span className="font-bold">Datum</span>
              <hr className="border-dashed border-gray-400" />
              <span className="text-right">
                <time dateTime="2023-08-25">2023-08-25</time>
              </span>
            </li>
          </ul>
          <h2 className="text-4xl font-cursive mt-8 md:mt-12">Toastmadames</h2>
          <p className="mt-2">
            Vi har två fantastiska toastmadames som ni kan kontakta om ni vill
            hålla tal eller liknande.
          </p>
          <ul className="mt-6 grid grid-cols-2">
            {toastmadames.map((toastmadame) => (
              <li key={toastmadame.name} className="flex flex-col items-center">
                <div className="font-semibold">{toastmadame.name}</div>
                <ul className="flex gap-2">
                  <li>
                    <a
                      className="underline decoration-dashed decoration-pink-600 text-pink-600"
                      href={`mailto:${toastmadame.email}`}
                    >
                      E-mail
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline decoration-dashed decoration-pink-600 text-pink-600"
                      href={`tel:${toastmadame.phone}`}
                    >
                      Telefon
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          <h2 className="text-4xl font-cursive mt-8 md:mt-10">Tider</h2>
          <ul className="space-y-2 mt-6">
            {times.map((time) => (
              <li
                className="grid grid-cols-[max-content,1fr,max-content] items-baseline gap-4"
                key={time.title}
              >
                <span className="font-bold">{time.title}</span>
                <hr className="border-dashed border-gray-400" />
                <span className="text-right">
                  <time dateTime={`2023-08-25T${time.time}`}>{time.time}</time>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 md:mt-10">
            <strong className="font-semibold">Foto: </strong>
            <a
              className="underline decoration-dashed decoration-pink-600 text-pink-600"
              href="https://sofiasoderlund.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sofia Söderlund
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
