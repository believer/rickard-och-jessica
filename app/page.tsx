import Image from 'next/image'
import rickJess from './rickjess.jpeg'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        <Image
          placeholder="blur"
          className="md:rounded md:shadow-lg"
          src={rickJess}
          alt="Rickard och Jessica tittar ut över ett hav av blommor"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          title="Foto: Sofia Söderlund"
        />
        <div className="p-8 flex flex-col items-center justify-center">
          <h1 className="font-cursive text-5xl md:text-7xl text-center bg-gradient-to-r bg-clip-text from-[#70444D] to-[#D63D99] text-transparent mb-4 md:mb-10">
            Rickard & Jessica
          </h1>
          <p className="text-xl text-center">
            Stort tack till alla som kom och firade med oss! Vi hade en
            fantastisk dag och kväll. ❤️
          </p>
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
        </div>
      </div>
    </main>
  )
}
