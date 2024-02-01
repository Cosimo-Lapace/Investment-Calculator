export default function Input({ labelName, name, onSetInvestment }) {
  function inputInvestment({ target }) {
    const { value } = target;
    onSetInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [name]: +value,
      };
    });
  }

  return (
    <div>
      <label>{labelName}</label>
      <input type="number" onChange={inputInvestment} name={name} />
    </div>
  );
}
