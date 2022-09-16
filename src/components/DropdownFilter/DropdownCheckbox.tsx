import React from 'react'

interface DropdownCheckboxProps {
    id: string
    value: string
    label: string
    handleChange: (value: string, checked: boolean) => void
}

export const DropdownCheckbox = ({ id, value, label, handleChange }: DropdownCheckboxProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.target.value, event.target.checked)
    }

    return (
        <li>
            <label
                htmlFor={id}
                className="flex items-center p-2 rounded hover:bg-gray-600 cursor-pointer"
            >
                <input
                    id={id}
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                    className="w-4 h-4 text-cyan-600 bg-gray-100 rounded border-gray-300 focus:ring-cyan-500 focus:ring-2"
                />
                <span className="ml-2 whitespace-nowrap">{label}</span>
            </label>
        </li>
    )
}
