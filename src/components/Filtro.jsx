export function Pesquisa ({ props }) {
    return(
        <>
            <div className="mt-4 grid grid-cols-3 grid-rows-max gap-5 text-poupa w-auto text-xs">
            {props.map((search, index) => (
                <div>
                    <a href={`#${search.tag}`} key={index} className="rounded-xl border-2 p-1 hover:cursor-pointer">
                        <b>{search.title}</b>
                    </a>
                </div>
            ))}
        </div>
    </>
    )
    
}