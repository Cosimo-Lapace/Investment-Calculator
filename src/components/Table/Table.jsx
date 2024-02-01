import { calculateInvestmentResults, formatter } from "../../util/investment";

function finalResult(investments){
  let totalInterest = 0;
  let investedCapital = 0;
  let arr = [];
  for (const investment of investments) {
    totalInterest += investment.interest;
    investedCapital = investment.valueEndOfYear - totalInterest;
    const obj = {
      year: investment.year,
      valueEndOfYear: investment.valueEndOfYear,
      interest: investment.interest,
      totalInterest: totalInterest,
      investedCapital: investedCapital,
    };

    arr.push(obj);
  }
  return arr;
}
export default function Table({ investment }) {
  const investments = calculateInvestmentResults(investment);
  const finalInvestment = finalResult(investments);
  if (finalInvestment.length === 0) {
    return (
      <div className="center">
        <p>Please enter a duration greater than zero</p>
      </div>
    );
  }
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {finalInvestment.map(
            ({
              year,
              valueEndOfYear,
              interest,
              totalInterest,
              investedCapital,
            }) => (
              <tr className="center" key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}