function Button({type,onClick, bgColor}){
    return(
        <>
        <button
        onClick={onClick}
         className={`rounded-md border-2 p-3 m-3 ${bgColor} hover:bg-transparent hover:duration-300 transform`}>{type}
         </button>
        </>
    )
}

export default Button;