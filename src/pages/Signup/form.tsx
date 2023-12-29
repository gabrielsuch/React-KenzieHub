import {Form, ErrorMessage} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {createUserSchema} from "../../schemas/user.schema"
import {TCreateUser} from "../../types/user.type"

import {Input} from "../../components/Input/index"

import {useUserContext} from "../../providers/UserContext/index"


export const FormSignup = () => {

    const {createUser} = useUserContext()

    const {handleSubmit, register, formState: {errors}} = useForm<TCreateUser>({
        resolver: yupResolver(createUserSchema)
    })

    const onSubmit = async (data: TCreateUser) => {
        await createUser(data)
    }

    const modules: readonly string[] = ["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo", "Quarto Módulo"]

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input id="name" label="Nome" type="text" placeholder="Digite aqui seu nome" register={register} error={errors.name}/>
            <Input id="email" label="Email" type="text" placeholder="Digite aqui seu email" register={register} error={errors.email}/>
            <Input id="password" label="Senha" type="password" placeholder="Digite aqui sua senha" register={register} error={errors.password}/>
            <Input id="confirm_password" label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" register={register} error={errors.confirm_password}/>
            <Input id="bio" label="Bio" type="text" placeholder="Fale sobre você" register={register} error={errors.bio}/>
            <Input id="contact" label="Contato" type="text" placeholder="Opção de Contato" register={register} error={errors.contact}/>

            <div id="modules">
                <select {...register("course_module")}>
                {
                    modules.map((module, index) => {
                        return <option key={index}>{module}</option>
                    })
                }
                </select>
            </div>
            <ErrorMessage>{errors.course_module?.message}</ErrorMessage>
            <div id="containerButton">
                <button type="submit">Cadastrar</button>
            </div>
        </Form>
    )
}