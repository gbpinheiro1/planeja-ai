import { PiggyBank } from "lucide-react"
import { StepProgress } from "../simulation/Progress"
import { FormStep } from "./FormStep"

export const SimulationForm = () => {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={10}></StepProgress>
      <FormStep
        icon={PiggyBank}
        title="Salário"
        question="Quanto você ganha por mês?"
        inputProps={{ type: "text", placeholder: "ex: 5.000,00", prefix: "R$" }}
      ></FormStep>
    </>
  )
}
