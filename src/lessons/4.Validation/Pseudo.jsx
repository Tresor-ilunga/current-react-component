export default function Pseudo({inputsStates, setInputsStates, showValidation}) {
    return (
        <>
        <label 
        className="text-slate-50"
        htmlFor="userName">Votre pseduo (3-64 caractères)
        </label>
        <input 
        id="userName"
        type="text" 
        className="rounded w-full p-1 mt-2"
        value={inputsStates.pseudo}
        onChange={e => setInputsStates({...inputsStates, pseudo: e.target.value})}
        />
        {showValidation.pseudo && (
            <p className="text-red-400 font-semibold">
                Votre pseudo doit contenir entre 3 et 64 caractères.
            </p>
        )}
        </>
    )
}