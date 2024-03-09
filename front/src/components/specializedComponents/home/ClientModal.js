import "../../../statics/css/styleClientModal.css"
import closeIcon from "../../../statics/imgs/closeIcon.png"

export function ClientModal(props) {
    return (
        <div className="client_modal_background" onClick={()=>props.setModal(false)}>
            <div className="client_modal" onClick={(e) => e.stopPropagation()}>
                <header>
                    <h3>Fernando Coelho Saraiva</h3>
                    <img onClick={()=>props.setModal(false)} src={closeIcon} alt="circulo vermelho com um x branco dentro"/>
                </header>

                <div className="">
                    <p>{`Name: ${props.client.name}`}</p>
                    <p>{`Celular: ${props.client.telephone}`}</p>
                    <p>{`Email: ${props.client.email}`}</p>
                    <p>{`Dia: ${props.client.day}`}</p>
                    <p>{`Endereço: ${props.client.address}`}</p>
                </div>
            </div>
        </div>
    )
}