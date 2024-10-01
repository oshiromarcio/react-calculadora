import Input from './Components/Input';
import InputLog from './Components/InputLog';
import Button from './Components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState("");
  const [currentCalculation, setCurrentCalculation] = useState("");

  const handleAddNumber = (number) => {
    if (operation !== "") {
      setCurrentNumber("0");
    }
    switch (number) {
      case '0' && currentNumber === '0': setCurrentNumber("0"); break;
      default: setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${number}`); break;
    }
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    setCurrentCalculation("");
  };

  const handleOperationNumbers = (newOperation) => {

    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setOperation(newOperation);
      setCurrentCalculation(`${currentNumber} ${newOperation}`);
    }
    else {
      let calc = 0;
      switch (operation) {
        case "+": calc = Number(firstNumber) + Number(currentNumber); break;
        case "-": calc = Number(firstNumber) - Number(currentNumber); break;
        case "*": calc = Number(firstNumber) * Number(currentNumber); break;
        case "/": calc = Number(firstNumber) / Number(currentNumber); break;
        default: calc = 0; break;
      }
      setFirstNumber(calc);
      setCurrentNumber(String(calc));
      setOperation(newOperation);
      setCurrentCalculation(`${calc} ${newOperation}`);
    }
  }

  const handleResult = () => {
    if (firstNumber !== "0") {
      let calc;
      switch (operation) {
        case "+": calc = Number(firstNumber) + Number(currentNumber); break;
        case "-": calc = Number(firstNumber) - Number(currentNumber); break;
        case "*": calc = Number(firstNumber) * Number(currentNumber); break;
        case "/": calc = Number(firstNumber) / Number(currentNumber); break;
        default: calc = 0; break;
      }
      setCurrentCalculation(`${firstNumber} ${operation} ${currentNumber} =`);
      setFirstNumber("0");
      setCurrentNumber(String(calc));
      setOperation("");
    }
  }

  return (
    <Container>
      <Content>
        <InputLog value={currentCalculation} /> 
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperationNumbers('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperationNumbers('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="/" onClick={() => handleOperationNumbers('/')}/>
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleResult}/>
          <Button label="x" onClick={() => handleOperationNumbers('*')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
