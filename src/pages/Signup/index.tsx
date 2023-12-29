import {Container, Header, Box, ErrorMessage} from "./style"

import {Input} from "../../components/Input/index"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {createUserSchema} from "../../schemas/user.schema"
import {TCreateUser} from "../../types/user.type"

import {useHistory} from "react-router-dom"

import {useUserContext} from "../../providers/UserContext/index"


export const Signup = () => {

    const history = useHistory()

    const {createRegister} = useUserContext()

    const modules: readonly string[] = ["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo", "Quarto Módulo"]

    const {register, handleSubmit, formState: {errors}} = useForm<TCreateUser>({
        resolver: yupResolver(createUserSchema)
    })
    
    const submit = async (data: TCreateUser) => {
        await createRegister(data)
    }

    return (
        <Container>
            <Header>
                <div className="headerTitle">
                    <h1>Kenzie Hub</h1>
                </div>
                <div className="backButton" onClick={() => history.push("/")}>
                    <button>Voltar</button>
                </div>
            </Header>
            <Box>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="formTitle">
                        <h1>Crie sua Conta</h1>
                    </div>
                    <div className="formTitle">
                        <h2>Rápido e Grátis, vamos nessa</h2>
                    </div>
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
                    <div className="containerButton">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </Box>
        </Container>
    )
}