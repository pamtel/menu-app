import React from 'react'

function MenuItem({source}) {
    console.log(source);
    return (
        <div className="mb-5 flex">
            <div style={{maxWidth: '40%', marginRight: "15px", border: "3px solid #d97706", borderRadius:"5px"}}>
                <img src={source.img} alt="" className="w-full h-48 object-cover"/>
            </div>
            <div className="text-justify">
                <div className="flex justify-between font-bold mb-5 border-b-2">
                    <h3 className="capitalize">{source.title}</h3>
                    <p className="text-yellow-600">{source.price}</p>
                </div>
                <p>{source.desc}</p>
            </div>
        </div>
    )
}

export default MenuItem
