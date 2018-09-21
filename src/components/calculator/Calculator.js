import React, { Component } from 'react';
import './Calculator.scss';

class AutoScalingText extends Component {
    state = {
        scale: 1
    };

    componentDidUpdate() {
        const { scale } = this.state

        // get div current
        const node = this.node

        // get parent div current
        const parentNode = node.parentNode

        // width div .calculator__display .auto-scaling-text = 306
        const availableWidth = parentNode.offsetWidth

        const actualWidth = node.offsetWidth
        const actualScale = availableWidth / actualWidth

        if (scale === actualScale)
            return

        if (actualScale < 1) {
            this.setState({ scale: actualScale })
        } else if (scale < 1) {
            this.setState({ scale: 1 })
        }
    }

    render() {
        const { scale } = this.state

        return (
            <div
                className="auto-scaling-text"
                style={{ transform: `scale(${scale},${scale})` }}
                ref={node => this.node = node}
            >{this.props.children}</div>
        )
    }
}


class CalculatorDisplay extends Component {
    render() {
        const { value, ...props } = this.props

        const language = navigator.language || 'vi_VI'
        let formattedValue = parseFloat(value).toLocaleString(language, {
            useGrouping: true,
            maximumFractionDigits: 9
        })

        // Add back missing .0 in e.g. 12.0
        const match = value.match(/\.\d*?(0*)$/)

        if (match)
            formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]

        return (
            <div {...props} className="calculator__display auto-scaling-text">
                <AutoScalingText>{formattedValue}</AutoScalingText>
            </div>
        )
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '0',
            waitingOperand: false,
            operator: null,
            value: null,
        }
    }

    inputDigit(digit) {
        const { displayValue, waitingOperand } = this.state;
        if (waitingOperand) {
            this.setState({
                displayValue: String(digit),
                waitingOperand: false
            })
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            });
        }
    }

    inputDot() {
        const { displayValue, waitingOperand } = this.state;
        if (waitingOperand) {
            this.setState({
                displayValue: '.',
                waitingOperand: false
            });
        } else if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.',
                waitingOperand: false
            });
        }
    }

    inputClear() {
        this.setState({
            displayValue: '0'
        })
    }

    toggleSign() {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
        })
    }

    inputPercent() {
        const { displayValue } = this.state;
        const value = parseFloat(displayValue) / 100

        this.setState({
            displayValue: String(value)
        })
    }

    operation(nextOperator) {
        const { displayValue, operator, value } = this.state;

        const inputValue = parseFloat(displayValue);

        const operations = {
            '/': (prevValue, nextValue) => prevValue / nextValue,
            '*': (prevValue, nextValue) => prevValue * nextValue,
            '-': (prevValue, nextValue) => prevValue - nextValue,
            '+': (prevValue, nextValue) => prevValue + nextValue,
            '=': (prevValue, nextValue) => nextValue,
        }

        if (value == null) {
            this.setState({
                value: inputValue
            })
        } else if (operator) {
            const currentValue = value || 0;
            const computedValue = operations[operator](currentValue, inputValue);

            this.setState({
                value: computedValue,
                displayValue: String(computedValue)
            })
        }

        this.setState({
            waitingOperand: true,
            operator: nextOperator
        })
    }


    calculatorDisplay(value) {
        const language = navigator.language || 'vi-VI'
        let formattedValue = parseFloat(value).toLocaleString(language, {
            useGrouping: true,
            maximumFractionDigits: 10
        })

        const match = value.match(/\.\d*?(0*)$/)
        if (match)
            formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]
        return formattedValue
    }

    render() {
        const { displayValue } = this.state;
        return (
            <div>
                <div className="calculator">
                    {/* <div className="calculator__display auto-scaling-text">{displayValue.length < 11 ? displayValue : <span className="message_error"># max chars (X_X)!</span>}</div> */}
                    {/* <div className="calculator__display auto-scaling-text"> */}
                    <CalculatorDisplay value={displayValue} />
                    {/* </div> */}
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button className="calculator__key calculator__func" onClick={() => this.inputClear()}>AC</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__func" onClick={() => this.toggleSign()}>±</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__func" onClick={() => this.inputPercent()}>%</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__oper" onClick={() => this.operation('/')}>÷</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(7)}>7</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(8)}>8</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(9)}>9</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__oper" onClick={() => this.operation('*')}>x</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(4)}>4</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(5)}>5</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(6)}>6</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__oper" onClick={() => this.operation('-')}>-</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(1)}>1</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(2)}>2</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDigit(3)}>3</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__oper" onClick={() => this.operation('+')}>+</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="calculator__key calculator__key0" onClick={() => this.inputDigit(0)}>0</button>
                                </td>
                                <td>
                                    <button className="calculator__key" onClick={() => this.inputDot()}>.</button>
                                </td>
                                <td>
                                    <button className="calculator__key calculator__oper" onClick={() => this.operation('=')}>=</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}

export default Calculator;