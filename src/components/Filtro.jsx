export function Pesquisa ({ props }) {
    return(
        <>
            <div className="mt-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 grid-rows-max gap-x-6 gap-y-2 text-poupa w-auto text-xs">
            {props.map((search, index) => (
                <a href={`#${search.tag}`} key={index} className="rounded-xl border-2 p-1 hover:cursor-pointer cond text-center">
                    <b>{search.title}</b>
                </a>
            ))}
        </div>
    </>
    )
    
}