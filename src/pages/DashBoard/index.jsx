import {useHistory} from "react-router-dom"
import {Header, Avatar, Main, Card, Profile, ShowMoreGreen, ShowMorePurple, Head, SpanGreen, SpanPurple, Li, Infos, Difficulty, RemoveButton, Name, CourseModule, About, Course, Contact, CardContact, CardContactEmail, Box, CardButton, LeaveButton} from "./style"
import {KenzieHub} from "../SignUp/style"
import TechnologyButton from "../../components/TechnologyButton/index"
import WorkButton from "../../components/WorkButton/index"
import {useState} from "react"
import {FiPhoneCall} from "react-icons/fi"

const DashBoard = ({auth, setAuth, data, setData}) => {

    const [tech, setTech] = useState(false)
    const [work, setWork] = useState(false)

    const [techs, setTechs] = useState([])
    const [works, setWorks] = useState([])

    const logout = () => {
        localStorage.clear()
        setAuth(false)
    }

    console.log(data)

    const history = useHistory()

    if(!auth)
    {
        history.push("/")
    }

    const showTech = () => {
        setTech(true)
    }

    const showWork = () => {
        setWork(true)
    }

    return (
        <>
            <Header>
                <KenzieHub>
                    <p>Kenzie <span>Hub</span></p>
                </KenzieHub>
                <Avatar>
                    Imagem
                </Avatar>
            </Header>
            <Main>
                <Card>
                    <Head>
                        <h2>Minhas Tecnologias</h2>
                        <ShowMoreGreen onClick={() => showTech()}>+</ShowMoreGreen>
                    </Head>
                    <ul>
                    {
                        techs.map((ele, index) => (
                            <>
                                <Li key={index}>
                                    <SpanGreen>Tech</SpanGreen>
                                    <Infos>
                                        <span>{ele.tech}</span>
                                        <Difficulty>{ele.level}</Difficulty>
                                    </Infos>
                                    <RemoveButton id={index}>Remover</RemoveButton>
                                </Li>

                            </>
                        ))
                    }
                    </ul>
                </Card>
                <Card>
                    <Head>
                        <h2>Meus Trabalhos</h2>
                        <ShowMorePurple onClick={() => showWork()}>+</ShowMorePurple>
                    </Head>
                    <ul>
                    {
                        works.map((ele, index) => (
                            <>
                                <Li key={index}>
                                    <SpanPurple>Work</SpanPurple>
                                    <Infos>
                                        <span>{ele.work}</span>
                                        <span>{ele.description}</span>
                                    </Infos>
                                    <RemoveButton>Remover</RemoveButton>
                                </Li>

                            </>
                        ))
                    }
                    </ul>
                </Card>
                <Profile>
                    <Course>
                        <Avatar>
                            <img src={data.user.avatar_url} alt={data.user.name} />
                        </Avatar>
                        <About>
                            <Name>
                                <h2>{data.user.name}</h2>
                            </Name>
                            <CourseModule>
                                <p>{data.user.course_module}</p>
                            </CourseModule>
                        </About>
                    </Course>
                    <Contact>
                        <CardContact>
                            {/* COLOCAR O ÍCONE DO CELULAR */}
                            Celular
                            <Box>
                                <h2>Ligar Agora</h2>
                                <span>{data.user.contact}</span>
                            </Box>
                        </CardContact>
                        <CardContactEmail>
                            {/* COLOCAR O ÍCONE DO EMAIL */}
                            Email
                            <Box>
                                <h2>Enviar Email</h2>
                                <span>{data.user.email}</span>
                            </Box>
                        </CardContactEmail>
                    </Contact>
                    {/* <CardContact> */}
                    <CardButton>
                        <LeaveButton onClick={() => logout()}>Sair</LeaveButton>
                    {/* </CardContact> */}
                    </CardButton>
                </Profile>
            </Main>
            {
                tech ?
                <TechnologyButton tech={tech} setTech={setTech} techs={techs} setTechs={setTechs}/>
                :
                <>
                </>
            }  
            {
                work ?
                <WorkButton work={work} setWork={setWork} works={works} setWorks={setWorks}/>
                :
                <>
                </>
            }
        </>
    )
}

export default DashBoard