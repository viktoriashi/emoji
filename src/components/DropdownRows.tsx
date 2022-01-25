import { type } from "os";
import React, { useState } from "react";
import '../styles/dropdownRows.css'


interface IOption {
    id: number
    value: number
}

interface IOptionsList {
    options: Array<IOption>
}

const rowsAmount:IOptionsList = {
    options: [
        {id: 1, value: 5},
        {id: 2, value: 10},
        {id: 3, value: 15},
        {id: 4, value: 20}
    ]
}

interface DropdownRowsProps {
    onChangeRowsNumber(dropdown:number): void
}

const DropdownRows: React.FC<DropdownRowsProps> = ({onChangeRowsNumber}) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="dropdown-menu">
            <a className="dropdown-menu__text" onClick={() => setOpen(!open)}>
                Rows limit
            </a>
            <ul className="dropdown-menu__slide">
                { open && 
                    rowsAmount.options.map(option => {
                        return (
                            <li key={option.id} className="dropdown-menu__options">
                                <button 
                                    className="dropdown-menu__button" onClick={() => onChangeRowsNumber(option.value)}>{option.value}
                                </button>
                            </li>
                        )
                    })
                }
                
            </ul> 
        </div>       
    )
}


export default DropdownRows