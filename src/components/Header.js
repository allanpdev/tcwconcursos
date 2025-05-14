import Image from 'next/image'

export default function Header(){
    return(
        <div className="w-full bg-blue-600">
            <div className="flex justify-between px-[32px] py-[12px]">
                <div className='flex gap-2'>
                    <Image src="/book.svg" width={18} height={16} alt='icone-livro'/>
                    <h2 className="text-[1.1em] font-[600] text-white">TCW Concursos</h2>
                </div>

                <div className='bg-white rounded-full flex items-center justify-center px-7'>
                    <span className='uppercase text-[15px] font-bold text-blue-600'>30% off</span>
                </div>
            </div>
        </div>
    )
}