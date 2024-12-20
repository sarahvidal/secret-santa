// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="space-y-2 grid grid-cols-2 gap-4">
      {assignments.map((assignment, index) => (
        <li className="flex flex-col items-center border-2 text-center gap-2 p-8 rounded-3xl border-white bg-dore text-nuit" key={index}>
          <span className="font-bold text-xl">{assignment.giver}</span> offrira un cadeau à{" "}
          <span className="font-bold text-xl">{assignment.receiver}</span>
        </li>
      ))}
    </ul>
  );
}
