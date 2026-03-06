import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operation, setOperation] = useState(null);

    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function operationHandler() {
        if(num>0) {
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function changeSign() {
        if(num>0) {
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperation(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        const n1 = Number(oldnum);
        const n2 = Number(num);

        if (operation === "+") {
            setNum(n1 + n2);
        } else if (operation === "-") {
            setNum(n1 - n2);
        } else if (operation === "*") {
            setNum(n1 * n2);
        } else if (operation === "/") {
            setNum(n1 / n2);
        }
    }

    function comma() {
        if (!num.toString().includes(".")) {
            setNum(num + ".");
        }
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12} />
                        <h1 className="result">{num.toString().replace(".", ",")}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={operationHandler}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className="orange" onClick={operatorHandler} value="/">/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value="*">*</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandler} value="-">-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value="+">+</button>
                    <button className="zero" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={comma}>,</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    );
}