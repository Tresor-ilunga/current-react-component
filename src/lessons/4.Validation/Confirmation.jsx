

export default function Confirmation() {
    return (
        <>
        <label 
            htmlFor="confirmation" 
            className="text-slate-50 inline-block mt-5">Confirmez votre mot de passe
        </label>
        <input 
        id="confirmation"
        type="password" 
        className="rounded w-full p-1 mt-2"
        />
        </>
    )
}
