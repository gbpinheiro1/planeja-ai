import { StepProgress } from "../simulation/Progress"
import { FormStep } from "./FormStep"
import {
  type SimulationFormData,
  simulationFormSteps,
} from "../../../data/simulation"
import { useState } from "react"
import { useSimulationStorage } from "../../../hooks/useSimulationStorage"
import { useNavigate } from "react-router"

export const SimulationForm = () => {
  const totalSteps = simulationFormSteps.length
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const currentStep = simulationFormSteps[currentStepIndex]
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  )
  const { saveFormData } = useSimulationStorage()
  const navigate = useNavigate()

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }

    setFormData(updatedFormData)

    if (currentStepIndex + 1 > totalSteps - 1) {
      const id = saveFormData(updatedFormData)
      void navigate(`/resultado/${id}`)
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      ></StepProgress>
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  )
}
