// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant
import Lottie from 'react-lottie';
import sapin from "../lotties/sapin.json";

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };
  const animSapin = {
    loop: false,
    autoplay: true,
    animationData: sapin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex mb-14 space-x-2">
        <input
          type="text"
          className="input flex-grow text-gray-50"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button text-white" onClick={addParticipant}>
          Ajouter
        </button>
      </div>
      <ul className="space-y-2 flex flex-col gap-5">
        {participants.map((name, index) => (
          <li key={index} className="list-item text-white border-l pl-5 border-dore">
            {name}
            <div className="space-x-2">
              <button
                className="text-dore hover:text-white"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer le participant
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
