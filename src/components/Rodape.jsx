import selo_febraban from "../assets/selo-febraban.png"
import selo_poupa from "../assets/selo-poupa.png"
import selo_gptw from "../assets/selo-gptw.png"

export function Rodape (){
    return (
        <>
            <div className="w-full mt-4">
                <div className="flex justify-center lg:gap-20 md:gap-15 sm:gap-10 align-middle items-center">
                    <img src={selo_febraban} alt="Selo Febraban" className="w-20 h-20"/>
                    <img src={selo_poupa} alt="Selo Febraban" className="w-25 h-20"/>
                    <img src={selo_gptw} alt="Selo Febraban" className="w-20 h-28.25"/>
                </div>
                <p className="text-center m-4 text-zinc-500 text-sm">Canal Digital · Atendimento Oficial · Poupacred, desde 2006</p>
            </div>
        </>
    )
}