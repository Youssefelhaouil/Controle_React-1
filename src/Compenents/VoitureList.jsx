import { useState } from "react";
import VoitureItem from "./VoitureItem";

function VoitureList() {
  const Data = [
    {
      matricule: "A38/3456",
      marque: "Mercedes",
      model: "A Class",
      image: "./Merc.png",
      carburant: "essence",
      prix: 10000,
    },
    {
      matricule: "A38/1234",
      marque: "Audit ",
      model: "A1",
      image: "./AuditA1.png",
      carburant: "diesel",
      prix: 9000,
    },
    {
      matricule: "A39/3458",
      marque: "BMW",
      model: "2er Gran tourer",
      image: "./Bmw.webp",
      carburant: "essence",
      prix: 120000,
    },
    {
      matricule: "A37/3456",
      marque: "Chevrolet",
      model: "Camaro",
      image: "./Chevrollet.jpeg",
      carburant: "essence",
      prix: 200000,
    },
  ];

  const [Voitures, setVoitures] = useState(Data);

  function DeleteVoiture(matricule) {
    const NewList = Voitures.filter(
      (voiture) => voiture.matricule !== matricule
    );
    setVoitures([...NewList]);
  }

  const VoitureChere = Voitures.reduce((max, voiture) => {
    if (voiture.prix > max.prix) {
      return voiture;
    } else {
      return max;
    }
  });

  const VoitureMarques = [
    ...new Set(Voitures.map((voiture) => voiture.marque)),
  ];

  const VoitureMarque = VoitureMarques.map((marque) => ({
    marque,
    count: Voitures.filter((voiture) => voiture.marque === marque).length,
  }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Voitures.map((voiture, index) => (
          <VoitureItem
            key={index}
            DeleteVoiture={DeleteVoiture}
            matricule={voiture.matricule}
            marque={voiture.marque}
            model={voiture.model}
            img={voiture.image}
            carburant={voiture.carburant}
            prix={voiture.prix}
          />
        ))}
      </div>
      <div className="flex justify-between pt-8">
        <div>
          <h1 className="font-bold text-xl">
            Nombre Total de Voitures :
            <span className="text-blue-600">{Voitures.length}</span>
          </h1>
          <ul className="flex flex-col gap-2 pt-4">
            {VoitureMarque.map((voiture, index) => (
              <li key={index} className="text-lg font-semibold">
                {voiture.marque}:{" "}
                <span className="text-blue-600">{voiture.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-bold text-xl flex flex-col justify-center items-center border-2 border-red-500 px-4 py-2 ">
          Voiture plus chère :
          <span className="text-blue-600  ">
            {VoitureChere.marque}-{VoitureChere.model}({VoitureChere.prix} $)
          </span>
          <img src={VoitureChere.image} alt="" />
        </h1>
      </div>
    </>
  );
}

export default VoitureList;
