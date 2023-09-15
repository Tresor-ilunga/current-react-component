import { useState } from "react"
import Pseudo from "./Pseudo.jsx"
import Password from "./Password.jsx"
import Confirmation from "./Confirmation.jsx"

export default function Validation() {
    const [inputsStates, setInputsStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })

    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto border p-10 rounded">
            <p className="text-slate-100 text-xl mb-6">
                Créez votre nom d'utilisateur et votre mot de passe
            </p> 
            <Pseudo />
            <Password />
            <Confirmation />
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">
                Valider
            </button>
        </form>
    )
}
