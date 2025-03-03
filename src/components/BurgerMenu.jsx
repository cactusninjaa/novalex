import { useState } from "preact/hooks";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <button onClick={() => setOpen(!open)} class="text-gray-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        {open && (
            <div class="md:hidden flex flex-col items-center py-4 space-y-2 bg-white shadow-md">
            <a href="/" class="text-gray-800 hover:text-gray-600">Accueil</a>
            <a href="/realisations" class="text-gray-800 hover:text-gray-600">Réalisations</a>
            </div>
        )}
        </>
    );
}
