export default function Password(inputsStates, setInputsStates, showValidation) {
    return (
        <>
        <label 
            htmlFor="password" 
            className="text-slate-50 inline-block mt-5">Votre mot de passe : Au moins un chiffre et 6 caractères
        </label>
        <input 
        id="password"
        type="password" 
        className="rounded w-full p-1 mt-2"
        value={inputsStates.password}
        onChange={e => setInputsStates({...inputsStates, password: e.target.value})}
        />
        </>
    )
}
