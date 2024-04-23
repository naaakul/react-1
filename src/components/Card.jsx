import React from "react";

function Card({values, handleClick, index}){
    const {name, pro, img, friend} = values;

    return (
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-40 bg-sky-200">
                <img className="w-full h-full object-cover" src={img} />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{pro}</h5>
                <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friend ? "bg-green-800" : "bg-blue-800"} font-semibold rounded-md`}>{friend === true ? "friends" : "Add Friend"}</button>
            </div>
        </div>
    )
}

export default Card;