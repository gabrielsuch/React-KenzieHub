import {HTMLInputTypeAttribute} from "react"
import {InputForm, ErrorMessage} from "./style"
import {UseFormRegister, Path, FieldValues,  FieldError} from "react-hook-form"


interface InputProps<T extends FieldValues> {
    id: Path<T>
    label: string
    type: HTMLInputTypeAttribute
    placeholder: string
    register: UseFormRegister<T>
    error?: FieldError | null
}

export const Input = <T extends FieldValues>({id, label, type, placeholder, register, error = null, ...rest}: InputProps<T>) => {
    return (
        <InputForm>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} {...register(id)} {...rest}/>
            <ErrorMessage>{error?.message}</ErrorMessage>
        </InputForm>
    )
}