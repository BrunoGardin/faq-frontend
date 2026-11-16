export function Modulo({props}) {
    console.log(props);
    return(
        <>
            {props.map((card, index) => (
                <div key={index}>
                    <h2 className="text-red-600">{card.title}</h2>
                    <hr className="border-red-600"></hr>
                    {card.questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h3>{question.subtitle}</h3>
                            <p>{question.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

// {
//     title: string;
//     questions: {
//         subtitle: string;
//         description: string;
//     }[];
// }[];