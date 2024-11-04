import React, { useState } from "react";

function VoitureItem({ img,matricule,marque,model,prix,carburant, DeleteVoiture}) {
  const [ChangeColor,SetChangeColor]=useState(false)
  return (
    <>
      <div className="grid grid-rows-2 w-full px-4 py-2 rounded-md shadow-xl hover:shadow-sm ">
        <img src={img} alt={`image de ${marque}`} className={`h-full w-full ${ChangeColor?"grayscale":""} rounded-md`} />
        <div className="flex flex-col justify-around gap-2 py-2 ">
          <h1 className="font-bold text-xl text-center pt-2">{marque} {model}</h1>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold ">prix : <span className="text-blue-500">{prix}$</span></h1>
            <h1 className="text-lg font-semibold ">Carburant: <span className="text-blue-500">{carburant}</span></h1>
          </div>
          <div className="flex gap-4 ">
            <button onClick={()=>SetChangeColor(true)} className="bg-blue-700 hover:bg-blue-500 text-white font-bold rounded-md px-4 py-2 h-9 w-full">
              Changer Color
            </button>
            <button onClick={()=>DeleteVoiture(matricule)} className="bg-red-700 hover:bg-red-500 text-white font-bold rounded-md px-4 py-2 h-9 w-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VoitureItem;
