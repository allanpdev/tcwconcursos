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
      
      <main className="bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center pt-7 pb-9 px-[32px]">
          <Image src="/apostila.png" width={185} height={185} alt="foto-apostila"/>

          <div className="pt-3 flex flex-col text-center text-white gap-3">
            <h1 className="font-semibold text-[1.2em] leading-[30px]">Você quer garantir sua vaga em um dos concursos mais aguardados do país?</h1>
            <p className="text-[1.05em] font-[400] text-gray-200">Prepare-se para o concurso do INSS com o melhor material de estudos disponível na internet! Com ele, você pode estudar de maneira eficiente, e direcionada para as provas, com foco na sua aprovação!</p>
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
          <Image src='/video.png' width={370} height={235} alt='legal'/>
          <h2 className="mt-4 text-[19px] font-bold uppercase">Sobre Nossa Apostila</h2>
          <p className=" mt-2 text-[17px]">A nossa apostila é o material mais completo de para quem quer ser aprovado no concurso do INSS. Abordamos cada disciplina cobrada nas provas e oferecemos mapas mentais e plano de estudos para quem está começando do zero. Além de exercícios e milhares de questões gabaritadas pela Cebraspe.</p>
          <a href="" className="border py-2 px-8 mt-4 w-[fit-content] text-[17px] rounded-md">Saiba mais</a>
        </div>
      </section>

      <section className="flex items-center justify-center bg-gradient-to-b from-[#0047ff] to-[#002B99] h-[165px]">
        <span className="w-[290px] text-white text-[1.2em] text-center font-bold">+ de 580 páginas com as questões mais cobradas em provas de português!</span>
      </section>

      <section id="vantagens" className="bg-white">
        <div className="flex flex-col p-6 gap-6 text-black">
          <div id="box-1" className="flex flex-col items-center text-center border px-6 py-8 rounded-md border-gray-300">
            <Image src='/book-blue.svg' width={40} height={53}/>
            <h2 className="mb-2 mt-4 text-[1.23em] font-semibold">Apostila Digital</h2>
            <p className="text-[1em]">Oferecemos mapas mentais e plano de estudos para quem está começando do zero. Além de exercícios e milhares de questões gabaritadas pela Cebraspe.</p>
          </div>

          <div id="box-2" className="flex flex-col items-center text-center border px-6 py-8 rounded-md border-gray-300">
            <Image src='/book-blue.svg' width={40} height={53}/>
            <h2 className="mb-2 mt-4 text-[1.23em] font-semibold">Apostila Digital</h2>
            <p className="text-[1em]">Oferecemos mapas mentais e plano de estudos para quem está começando do zero. Além de exercícios e milhares de questões gabaritadas pela Cebraspe.</p>
          </div>

          <div id="box-3" className="flex flex-col items-center text-center border px-6 py-8 rounded-md border-gray-300">
            <Image src='/book-blue.svg' width={40} height={53}/>
            <h2 className="mb-2 mt-4 text-[1.23em] font-semibold">Apostila Digital</h2>
            <p className="text-[1em]">Oferecemos mapas mentais e plano de estudos para quem está começando do zero. Além de exercícios e milhares de questões gabaritadas pela Cebraspe.</p>
          </div>
        </div>
      </section>

      <section id="garantia" className="flex flex-col items-center text-center px-8 py-10 text-white bg-[#080B27]">
        <Image src='/estrela.png' width={158} height={53}/>
        <h2 className="pt-4 pb-2 text-xl uppercase font-semibold">Garantia de Satisfação</h2>
        <p className="text-base">Se por algum motivo, você não estiver satisfeito com o nosso produto, basta com que solicite um reembolso, e a nossa equipe irá restituir 100% do seu dinheiro!</p>
      </section>
    </div>
  )
}
