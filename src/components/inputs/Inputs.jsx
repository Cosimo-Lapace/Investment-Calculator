
import Input from "./input/Input";

export default function Inputs({ setInvestment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          labelName="INITIAL INVESTMENT"
          onSetInvestment={setInvestment}
          name="initialInvestment"
        />
        <Input
          labelName="ANNUAL INVESTMENT"
          onSetInvestment={setInvestment}
          name="annualInvestment"
        />
        <Input
          labelName="EXPECTED RETURN"
          onSetInvestment={setInvestment}
          name="expectedReturn"
        />
        <Input
          labelName="DURATION"
          onSetInvestment={setInvestment}
          name="duration"
        />
      </div>
    </div>
  );
}