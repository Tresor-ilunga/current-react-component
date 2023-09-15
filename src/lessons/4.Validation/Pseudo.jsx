export default function Pseudo(inputsStates, setInputsStates, showValidation) {
    return (
        <>
        <label 
            htmlFor="userName" 
            className="text-slate-50">Votre pseudo (3-64 caractères)
        </label>
        <input 
        id="userName"
        type="text" 
        className="rounded w-full p-1 mt-2"
        value={inputsStates.pseudo}
        onChange={e => setInputsStates({...inputsStates, pseudo: e.target.value})}
        />
        </>
    )
}
