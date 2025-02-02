import "../index.css"

export default function Button({textValue,handleButton}){


    return(
        <>
        <button onClick={handleButton} className="px-5 py-3 bg-sky-400 rounded-full text-white" type="submit">{textValue}</button>
        </>
    )
}