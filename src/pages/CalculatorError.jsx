import './CalculatorError.css'

export default function CalculatorError() {
  return (
    <div className="calculator-error">
      <div className="rectangle-7">
      </div>
      <div className="container">
        <div className="react-calculator">
        React Calculator
        </div>
        <div className="group-11">
          <span className="num-1">
          Num 1
          </span>
          <div className="rectangle-4">
          </div>
        </div>
        <div className="group-10">
          <span className="num-2">
          Num 2
          </span>
          <div className="rectangle-5">
          </div>
        </div>
        <div className="group-8">
          <div className="group-3">
            <span className="container">
            +
            </span>
          </div>
          <div className="group-5">
            <span className="container-1">
            -
            </span>
          </div>
          <div className="group-6">
            <span className="container-2">
            *
            </span>
          </div>
          <div className="group-7">
            <span className="container-3">
            /
            </span>
          </div>
        </div>
        <p className="error-num-1-cannot-be-empty">
        <span className="error-num-1-cannot-be-empty-sub-0"></span><span></span>
        </p>
      </div>
    </div>
  )
}