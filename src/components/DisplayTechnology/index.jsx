import {Li, SpanGreen, Infos, Difficulty, RemoveButton} from "./style"

const DisplayTechnology = ({ele, removeTech}) => {

    return (
        <Li>
            <SpanGreen>Tech</SpanGreen>
            <Infos>
                <span>{ele.title}</span>
                <Difficulty>{ele.status}</Difficulty>
            </Infos>
            <RemoveButton onClick={() => removeTech(ele.id)}>Remover</RemoveButton>
        </Li>
    )
}

export default DisplayTechnology