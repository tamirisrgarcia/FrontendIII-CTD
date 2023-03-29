import  Header  from "../../components/header"

export default function DashboardTemplate(props) {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    )
}