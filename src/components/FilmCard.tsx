export type Props = {
    source : string,
    name : string,
    location : string,
    yearBorn : number,
    categories : string
}

export default function FilmCard(props : Props) {
    return (
        <div className="film-card">
            <div className="film-card-container">
                <div className="img-container">
                    <img src={props.source} alt={props.name} />
                </div>
                <div className="infor-container">
                    <h2>{props.name}</h2>
                    <p>{props.location}</p><p>{props.yearBorn}</p>
                    <span>Category: {props.categories}</span>
                </div>
            </div>
        </div>
    )
}