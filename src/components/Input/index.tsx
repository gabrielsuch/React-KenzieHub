import {InputForm, ErrorMessage} from "./style"
import {FieldError} from "react-hook-form"


interface InputProps {
    name?: string
    label?: string
    type?: string
    placeholder?: string
    register: Function
    error?: FieldError | null
}

const Input = ({name, label, type, placeholder, register, error = null, ...rest}: InputProps) => {
    return (
        <InputForm>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} placeholder={placeholder} {...register(name)} {...rest}/>
            <ErrorMessage>{error?.message}</ErrorMessage>
        </InputForm>
    )
}

export default Input