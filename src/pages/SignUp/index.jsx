import {Middle, KenzieHub, Box, Form, Input, Modules, Button, ErrorMessage, AlreadyRegistered} from "./style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import api from "../../services/index"

const SignUp = ({auth, setAuth}) => {

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        bio: yup.string().required("Campo Obrigatório"),
        contact: yup.string().required("Campo Obrigatório"),
        course_module: yup.string().required("Campo Obrigatório").nullable(),
        password: yup.string().required("Campo Obrigatório").min(8, "Mínimo 8 dígitos"),
        passwordConfirm: yup.string().required("Campo Obrigatório").oneOf([yup.ref("password")], "Senhas Diferentes"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        api.post("/users", data)
        .then(response => {
            history.push("/login")
            toast.success("Sucesso ao Criar Conta")
        })
        .catch(err => toast.error("Erro ao Criar Conta"))
    }
    
    return (
        <Middle>
            <KenzieHub>
                <p>Kenzie <span>Hub</span></p>
            </KenzieHub>
            <Box>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <Input placeholder="Nome" {...register("name")}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    <Input placeholder="Email" {...register("email")}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Input placeholder="Bio" {...register("bio")}/>
                    <ErrorMessage>{errors.bio?.message}</ErrorMessage>
                    <Input placeholder="Contato" {...register("contact")}/>
                    <ErrorMessage>{errors.contact?.message}</ErrorMessage>

                    <p>Selecionar Módulo: </p>
                    <Modules>
                        <input type="radio" name="module" id="primeiro" value="Primeiro módulo (Introdução ao Frontend)" {...register("course_module")}/>
                        <label htmlFor="primeiro" title="1° Módulo"><span>Primeiro</span></label>
                        <input type="radio" name="module" id="segundo" value="Segundo módulo (Frontend Avançado)" {...register("course_module")}/>
                        <label htmlFor="segundo" title="2° Módulo"><span>Segundo</span></label>
                        <input type="radio" name="module" id="terceiro" value="Terceiro módulo (Introdução ao Backend)" {...register("course_module")}/>
                        <label htmlFor="terceiro" title="3° Módulo"><span>Terceiro</span></label>
                        <input type="radio" name="module" id="quarto" value="Quarto módulo (Backend Avançado)" {...register("course_module")}/>
                        <label htmlFor="quarto" title="4° Módulo"><span>Quarto</span></label>
                    </Modules>
                    <ErrorMessage>{errors.module?.message}</ErrorMessage>

                    <Input type="password" placeholder="Senha" {...register("password")}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <Input type="password" placeholder="Confirmar Senha" {...register("passwordConfirm")}/>
                    <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
                    <Button type="submit">Cadastrar</Button>
                    <AlreadyRegistered onClick={() => history.push("/login")}>Já possuo uma conta.</AlreadyRegistered>
                </Form>
            </Box>
        </Middle>
    )
}

export default SignUp