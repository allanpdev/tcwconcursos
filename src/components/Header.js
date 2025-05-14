import Image from 'next/image'

export default function Header(){
    return(
        <div className="w-full bg-blue-600">
            <div className="flex justify-between px-[32px] py-[10px]">
                <div className='flex gap-2'>
                    <Image src="/book.svg" width={20} height={18} alt='icone-livro'/>
                    <h2 className="text-[1.1em] text-white">TCW Concursos</h2>
                </div>

                <div className='bg-white rounded-full flex items-center justify-center px-5'>
                    <span className='uppercase font-bold text-blue-600'>30% off</span>
                </div>
            </div>
        </div>
    )
}