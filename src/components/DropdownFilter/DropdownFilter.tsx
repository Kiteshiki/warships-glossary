import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { DropdownCheckbox } from './DropdownCheckbox'

interface DropdownProps {
    name: string
    label: string
    filters?: { title: string; name: string }[]
    handleChange: (data: string[], name: string) => void
}

export const DropdownFilter = ({ name, label, filters = [], handleChange }: DropdownProps) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedOutside = !(event.target as Element).closest(`#dropdown-${name}`)
            if (clickedOutside) setShow(false)
        }
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShow(!show)
    }

    const onChange = (value: string, checked: boolean) => {
        let newData = checked ? [...data, value] : [...data].filter((el) => el !== value)

        setData(newData)
        handleChange(newData, name)
    }

    return (
        <div className="relative" id={`dropdown-${name}`}>
            <button
                className="shadow-md text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
                onClick={toggleDropdown}
            >
                {label}
                <ArrowIcon />
            </button>

            <div
                id={`dropdown-${label}`}
                className={classnames(
                    'absolute top-12 z-10 max-w-sm w-auto max-h-96 rounded overflow-auto shadow bg-gray-700',
                    {
                        hidden: !show,
                    },
                )}
            >
                <ul className="p-3 space-y-1 text-sm shadow-md">
                    {filters.map((filter, index) => {
                        return (
                            <DropdownCheckbox
                                key={`checkbox-${filter.name}-${index}`}
                                id={`checkbox-${filter.name}-${index}`}
                                value={filter.name}
                                label={filter.title}
                                handleChange={onChange}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const ArrowIcon = () => {
    return (
        <svg
            className="ml-2 w-4 h-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            ></path>
        </svg>
    )
}
