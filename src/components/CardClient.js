import alertIcon from "../statics/imgs/alertIcon.png"
import cautionAlert from "../statics/imgs/cautionAlert.png"
import "../statics/css/styleCardClient.css"

export function ClientCard(props){
    return (
        <div className="card_client">
            <div>
                <p className="card_client_name">Fernando Coelho</p>
                <p className="card_client_address">Bairro boa vista</p> 
            </div>

            <img src={cautionAlert} alt="Um triângulo amarelo com uma exclamação branca no meio"/>
        </div>
    )
}