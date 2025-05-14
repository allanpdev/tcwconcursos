import Image from "next/image";
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: "TCW Concursos | Adquira sua apostila já",
  description: "testando",
  robots: {
    index: true, 
    follow: true
  },
  keywords: ['concursos', 'apostilas'],
  authors: [
    {name: "Allan Pires"}
  ]
}

export default function Home() {
  return (
    <div>
      <Header/>
      
      <main className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center pt-7 pb-9 px-[32px]">
          <Image src="/apostila.png" width={200} height={200} alt="foto-apostila"/>

          <div className="flex flex-col text-center text-white gap-3">
            <h1 className="font-semibold text-[1.25em] leading-[25px]">Você quer garantir sua vaga em um dos concursos mais aguardados do país?</h1>
            <p className="text-[1.1em] font-[200]">Prepare-se para o concurso do INSS com o melhor material de estudos disponível na internet! Com ele, você pode estudar de maneira eficiente, e direcionada para as provas, com foco na sua aprovação!</p>
          </div>

          <a href="" className="w-full h-[auto] mt-5 text-center bg-gradient-to-b from-[#0075ff] to-[#0050ad] uppercase text-white rounded-md py-3 text-[1em] font-semibold">Garantir com 30% off</a>

          <div className="flex flex-col items-center mt-6">
            <p className="text-white uppercase font-bold">De <span className="text-red-500 line-through">R$34,90</span> por:</p>
            <span className="text-[#00ff09] text-[2.6em] font-[900]">R$10,00</span>
          </div>
        </div>
      </main>

      <section className="bg-white text-black p-7 pb-10">
        <div className="flex flex-col text-center items-center">
          <Image src='/video.png' width={370} height={235}/>
          <h3 className="mt-4 text-[19px] font-bold uppercase">Sobre Nossa Apostila</h3>
          <p className=" mt-2 text-[17px]">A nossa apostila é o material mais completo de para quem quer ser aprovado no concurso do INSS. Abordamos cada disciplina cobrada nas provas e oferecemos mapas mentais e plano de estudos para quem está começando do zero. Além de exercícios e milhares de questões gabaritadas pela Cebraspe.</p>
          <a href="" className="border py-2 px-8 mt-4 w-[fit-content] text-[17px] rounded-md">Saiba mais</a>
        </div>
      </section>

      <section className="flex items-center justify-center bg-gradient-to-b from-[#0047ff] to-[#002B99] h-[165px]">
        <h4 className="w-[290px] text-white text-[1.2em] text-center font-bold">+ de 580 páginas com as questões mais cobradas em provas de português!</h4>
      </section>
    </div>
  )
}
