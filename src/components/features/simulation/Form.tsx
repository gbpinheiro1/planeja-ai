import { StepProgress } from "../simulation/Progress"

export const SimulationForm = () => {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={10}></StepProgress>
    </>
  )
}
