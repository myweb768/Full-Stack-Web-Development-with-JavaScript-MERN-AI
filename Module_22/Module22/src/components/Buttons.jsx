export default function Button({title, bgColor, eventClick, type="button"}){
    return(
        <button
        type={type}
        className="btn"
    style={{backgroundColor:bgColor}}
     onClick={eventClick}>{title}</button>
    )
}