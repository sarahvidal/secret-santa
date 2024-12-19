// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart
import Lottie from 'react-lottie';
import sapin from "../lotties/sapin.json";
import boule from "../lotties/boule.json";
import etoile from "../lotties/boule-etoile.json";

export function WelcomeScreen({ onStart }) {
  const animSapin = {
    loop: false,
    autoplay: true,
    animationData: sapin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  const animBoule = {
    loop: false,
    autoplay: true,
    animationData: boule,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  const animEtoile = {
    loop: false,
    autoplay: true,
    animationData: etoile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
    <div className="relative flex flex-col items-center justify-between bg-nuit text-center px-4 py-30 text-white">
      {/* <div className="absolute top-0 left-0 w-/3">
        <Lottie options={animEtoile} height={300} width={100} />
      </div> */}
      <div className="absolute top-0 right-0 w-1/3">
        <Lottie options={animBoule} height={170} width={150} />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full space-y-4 pb-12">
        <div className="w-3/4 bg-nuit rounded-full border border-dore py-3">
          <h1 className="text-4xl font-semibold text-white font-jost">
            Secret Santa
          </h1>
        </div>
        <p className="text-lg">Organisez facilement vos échanges de cadeaux entre amis.</p>
      </div>

      <div className="">
        <Lottie options={animSapin} height={350} width={270} />
      </div>

      <button
        onClick={onStart}
        className="mt-6 border rounded-full text-lg px-8 py-3 border-dore bg-white text-nuit hover:bg-gray-200"
      >
        Commencer
      </button>
    </div>
  );
}
