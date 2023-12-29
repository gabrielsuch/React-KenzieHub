import {Form} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {loginSchema} from "../../schemas/user.schema"
import {TLogin} from "../../types/user.type"

import {Input} from "../../components/Input/index"

import {useUserContext} from "../../providers/UserContext/index"


export const FormLogin = () => {

    const {login} = useUserContext()

    const {register, handleSubmit, formState: {errors}} = useForm<TLogin>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = async (data: TLogin) => {
        await login(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input id="email" label="Email" type="text" placeholder="Email" register={register} error={errors.email}/>
            <Input id="password" label="Senha" type="password" placeholder="Senha" register={register} error={errors.password}/>
            <div id="containerButton">
                <button type="submit">Entrar</button>
            </div>
        </Form>
    )
}