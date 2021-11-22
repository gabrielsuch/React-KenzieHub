import {useHistory} from "react-router-dom"
import {Header, Avatar, Main, Card, Profile, ShowMoreGreen, ShowMorePurple, Head, SpanGreen, SpanPurple, Li, Infos, Difficulty, RemoveButton} from "./style"
import {KenzieHub} from "../SignUp/style"
import TechnologyButton from "../../components/TechnologyButton/index"
import WorkButton from "../../components/WorkButton/index"
import {useState} from "react"

const DashBoard = ({auth, setAuth}) => {

    const [tech, setTech] = useState(false)
    const [work, setWork] = useState(false)

    const [techs, setTechs] = useState([])
    const [works, setWorks] = useState([])

    console.log(techs)

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
                <Card>
                    <h2>Informações do Perfil</h2>
                </Card>
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