import BaseTemplate from "../../templates/base-template"
import Box from "../../components/box"

export default function HomePage(){
    function msg() {
        alert("ok");
    }

    return(
        <BaseTemplate>
            <div>
                <h1>HomePage</h1>
                <Box msg={msg}>
                    <p>Título passado via props</p>
                </Box>
            </div>
        </BaseTemplate>
    )
}