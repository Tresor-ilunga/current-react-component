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

        if(validationCheck()){
            console.log("Envoi du formulaire");
        }

        function validationCheck(){
            const areValid = {
                pseudo: false,
                password: false,
                passwordConfirmation: false
            }

            if(inputsStates.pseudo < 3 || inputsStates.pseudo.length > 15){
                setShowValidation(state => ({...state, pseudo: true}))
            }
            else {
                areValid.pseudo = true
                setShowValidation(state => ({...state, pseudo: false}))
            }

            if(inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)){
                setShowValidation(state => ({...state, password: true}))
            }
            else {
                areValid.password = true
                setShowValidation(state => ({...state, password: false}))
            }

            if(inputsStates.passwordConfirmation !== inputsStates.password){
                setShowValidation(state => ({...state, passwordConfirmation: true}))
            }
            else {
                areValid.passwordConfirmation = true
                setShowValidation(state => ({...state, passwordConfirmation: false}))
            }

            if(Object.values(areValid).every(value => value)){
                return true
            }
            else {
                false
            }
        }
    }
    return (
        <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto border p-10 rounded">
            <p className="text-slate-100 text-xl mb-6">
                Créez votre nom d'utilisateur et votre mot de passe
            </p> 
            <Pseudo 
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            />
            <Password 
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            />
            <Confirmation 
            inputsStates={inputsStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            />
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">
                Valider
            </button>
        </form>
    )
}
