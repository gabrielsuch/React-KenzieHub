import {useHistory} from "react-router-dom"
import {Header, Avatar, Main, Card, Profile, ShowMoreGreen, ShowMorePurple, Head, Name, CourseModule, About, Course, Contact, CardContact, CardContactEmail, Box, CardButton, LeaveButton, ReactLogo} from "./style"
import {KenzieHub} from "../SignUp/style"
import TechnologyButton from "../../components/TechnologyButton/index"
import WorkButton from "../../components/WorkButton/index"
import {useEffect, useState} from "react"
import {FiPhoneCall, FiMail} from "react-icons/fi"
import DisplayTechnology from "../../components/DisplayTechnology/index"
import DisplayWork from "../../components/DisplayWork/index"
import api from "../../services/index"
import {Redirect} from "react-router-dom"
import { toast } from "react-toastify"

const DashBoard = ({auth, setAuth, data, setData}) => {

    const [tech, setTech] = useState(false)
    const [work, setWork] = useState(false)

    const [techs, setTechs] = useState([])
    const [works, setWorks] = useState([])

    const [token] = useState(() => localStorage.getItem("@KenzieHub:token") || "")
    const [id] = useState(() => localStorage.getItem("@KenzieHub:id") || "")

    const history = useHistory()

    const logout = () => {
        localStorage.clear()
        history.push("/")
        setAuth(false)
    }

    const updateData = () => {
        api.get(`/users/${id}`)
        .then((response) => {
            setTechs(response.data.techs)
            setWorks(response.data.works)
            setData(response.data)
        })
        .catch(err => console.log(err))
    }

    const removeTech = (tech_id) => {
        api.delete(`/users/techs/${tech_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            toast.success("Tecnologia Excluída!")
            setTechs(techs.filter((ele) => {
                return tech_id !== ele.id
            }))
        }).catch(err => {
            toast.error("Não foi possível excluir!")
            console.log(err)
        })
    }

    const removeWork = (tech_id) => {
        api.delete(`/users/works/${tech_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            toast.success("Tecnologia Excluída!")
            setWorks(works.filter((ele) => {
                return tech_id !== ele.id
            }))
        }).catch(err => {
            toast.error("Não foi possível excluir!")
            console.log(err)
        })
    }

    useEffect(() => {
        updateData()
    }, [])

    if(!auth)
    {
        <Redirect to="/"/>
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
                        techs?.map((ele, index) => (
                            <>
                                <DisplayTechnology key={ele.id} ele={ele} removeTech={removeTech}/>
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
                        works?.map((ele, index) => (
                            <>
                                <DisplayWork key={ele.id} ele={ele} removeWork={removeWork}/>
                            </>
                        ))
                    }
                    </ul>
                </Card>
                <Profile>
                    <Course>
                        <Avatar>
                            {/* <img src={data.user.avatar_url} alt={data.user.name} /> */}
                        </Avatar>
                        <About>
                            <Name>
                                <h2>{data?.name}</h2>
                            </Name>
                            <CourseModule>
                                <p>{data?.course_module}</p>
                            </CourseModule>
                        </About>
                    </Course>
                    <Contact>
                        <CardContact>
                            <ReactLogo>
                                <FiPhoneCall/>
                            </ReactLogo>
                            <Box>
                                <h2>Ligar Agora</h2>
                                <span>{data?.contact}</span>
                            </Box>
                        </CardContact>
                        <CardContactEmail>
                            <ReactLogo>
                                <FiMail/>
                            </ReactLogo>
                            <Box>
                                <h2>Enviar Email</h2>
                                <span>{data?.email}</span>
                            </Box>
                        </CardContactEmail>
                    </Contact>
                    <CardButton>
                        <LeaveButton onClick={() => logout()}>Sair</LeaveButton>
                    </CardButton>
                </Profile>
            </Main>
            {
                tech ?
                <TechnologyButton setTech={setTech} techs={techs} setTechs={setTechs}/>
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