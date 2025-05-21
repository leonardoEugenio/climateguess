import Image from 'next/image'
import southAmericaBgImg from '@/assets/images/south-america-bg.png'
import { FaGlobe } from 'react-icons/fa'

export default function Home() {
  return (
    <section className="w-screen h-screen relative">
      <Image
        src={southAmericaBgImg}
        alt="mapa do sul"
        className="object-cover size-full absolute top-0 left-0"
      />
      <main className="absolute size-full left-0 top-0 bg-radial-[at_50%_50%] from-slate-500/80 to-slate-800/10 dark:from-slate-800/80 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="bg-white dark:bg-slate-900 px-4 py-8 md:p-8 rounded-2xl shadow-2xl w-3xl max-w-[95vw] text-center space-y-8">
            <div className="mx-auto w-fit flex items-center gap-2 text-2xl sm:text-5xl lg:text-7xl">
              <FaGlobe className="text-secondary text-content" />
              <h1 className="text-secondary dark:text-primary">
                CLIMATE<span className="text-primary">GUESSER</span>{' '}
              </h1>
            </div>
            <h2 className="text-slate-800 dark:text-slate-100">
              Descubra a região mais próxima com base na previsão do tempo.
              Analise as informações climáticas e veja se consegue acertar o
              local!
            </h2>
            <button className="bg-secondary text-white p-4 font-bold mt-4 tracking-widest duration-300 hover:saturate-150 hover:scale-110">
              JOGAR AGORA
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}
