import React from 'react';

type InputProps = {
    value: string,
    placeholder: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = React.memo(
    ({ value, placeholder, changeHandler }: InputProps) => {
        return (
            <>
                <input type="text" value={value} placeholder={placeholder} onChange={changeHandler} />
            </>
        )
    }
)

export default Input