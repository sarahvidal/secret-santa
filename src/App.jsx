import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import Lottie from 'react-lottie';
import sapin from "./lotties/sapin-long.json";

export default function App() {
  const animSapin = {
    loop: false,
    autoplay: true,
    animationData: sapin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="container h-screen px-6">
      <div className="flex items-center justify-center flex-col">
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        {currentScreen === "input" && (
          <>
            <div className="flex flex-col justify-center pt-14 items-center gap-9">
              <h2 className="text-2xl font-jost border rounded-full border-dore text-white font-semibold mb-6 text-center py-3 px-5">
                Ajoutez les participants
              </h2>
              <ParticipantInput
                onAddParticipant={addParticipant}
                participants={participants}
                onRemoveParticipant={removeParticipant}
              />
              <div className="flex flex-col items-center w-full bg-nuit mb-8 p-4">
                <button
                  className="button w-3/4 text-nuit bg-white border border-dore rounded-full py-3 mb-5 hover:bg-gray-200"
                  onClick={distributeGifts}
                >
                  Distribuer les cadeaux
                </button>
                <Lottie options={animSapin} height={100} width={300} />
              </div>
              
            </div>
          </>
        )}
        {currentScreen === "assignments" && (
          <>
          <div className="flex flex-col justify-center items-center gap-9 py-14">
          <h2 className="text-2xl font-jost border rounded-full border-dore text-white font-semibold mb-6 text-center py-3 px-5">
              Attributions des cadeaux
            </h2>
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6 w-2/4">
              <button className="button w-full text-nuit bg-white border border-dore rounded-full py-3 hover:bg-gray-200" onClick={resetApp}>
                Recommencer
              </button>
            </div>
          </div>
            
          </>
        )}
      </div>
    </div>
  );
}
