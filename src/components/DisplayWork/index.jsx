import {Li, SpanPurple, Infos, RemoveButton} from "./style"

const DisplayWork = ({ele, removeWork}) => {
    return (
        <Li>
            <SpanPurple>Work</SpanPurple>
            <Infos>
                <span>{ele.title}</span>
                <span>{ele.description}</span>
            </Infos>
            <RemoveButton onClick={() => removeWork(ele.id)}>Remover</RemoveButton>
        </Li>
    )
}

export default DisplayWork