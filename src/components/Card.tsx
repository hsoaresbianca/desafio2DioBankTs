interface Icard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({  id, paragraph, details  }: Icard) => {
    return (
        <div>
            <h1>Título {id}</h1>
            <h2>Subtítulo</h2>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    )
}