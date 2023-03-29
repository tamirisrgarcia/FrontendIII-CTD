import  Header  from "../../components/header"
import  Footer  from "../../components/footer"

export default function BaseTemplate(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}