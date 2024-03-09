import "../../../statics/css/styleFilterModal.css"
import closeIcon from "../../../statics/imgs/closeIcon.png"

export function FilterModal(props){
    return (
        <div className="filter_modal_background" onClick={()=>props.setModal(false)}>
            <div className="filter_modal" onClick={(e)=>e.stopPropagation()}>
                <header>
                    <h3>Filtrar clientes</h3>
                    <img onClick={()=>props.setModal(false)} src={closeIcon} alt="circulo vermelho com um x branco dentro"/>
                </header>
                <form>
                    <input type="text" id="nickName" placeholder="Nome do cliente" />
                    <input type="text" id="nickName" placeholder="Email do cliente" />
                    <input type="text" id="nickName" placeholder="Número do cliente" />
                    <input type="text" id="nickName" placeholder="Data da faxina do cliente" />
                    <input type="text" id="nickName" placeholder="Endereço do cliente" />
                </form>
            </div>
            {/* <div className="filter_modal_background" onClick={()=>props.setModal(false)}></div> */}
        </div>
    )
}