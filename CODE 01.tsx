// FILE: CODE 01.tsx

// ✅ Étape 1 — (Optionnel avec React 17+/18) : 
// On n'a plus besoin d'importer 'React' pour JSX avec le nouveau transform.
// Si votre config l'exige encore, vous pouvez garder: import React from 'react';

// Étape 2 — Définir le type des props avec une interface.
// Ici, le composant attend un seul prop 'name' de type string.
interface GreetingProps {
  name: string;
}

// Étape 3 — Taper le composant fonctionnel avec les props.
// Deux styles possibles :
// A) Avec annotation explicite de la fonction (recommandé, simple)
function Greeting({ name }: GreetingProps) {
    // Étape 4 — Utiliser les props typées dans le JSX.
    return <div>Hello, {name}!</div>;
}

export default Greeting;
