import { ClientCard } from "../../components/CardClient";
import { Menu } from "../../components/Menu";
import filterIcon from "../../statics/imgs/filterIcon.png"
import addIcon from "../../statics/imgs/addIcon.png"

import "../../statics/css/styleHomePage.css"
import { FilterModal } from "../../components/specializedComponents/home/FilterModal";
import { useState } from "react";
import { selectText } from "../../services/alert/defaultAlerts";

export function HomePage(props){
    const [modalFilter, setModalFilter] = useState(false)

    const addClient = async () => {
        const newUser = await createNewUserForm()
        if(!newUser) return

    }

    return (
        <div>
            <Menu />
            <div className="home_page">
                <header className="home_page_header">
                    <img onClick={addClient} src={addIcon} alt="Um circulo verde com um sinal de mais no meio"/>
                    <img onClick={()=>setModalFilter(true)} src={filterIcon} alt=""/>

                    {modalFilter && <div className="header_filter_modal"><FilterModal setModal = {setModalFilter}/></div>}
                    
                </header>
                <section className="home_page_cardswrapper ">
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                </section>
            </div>
        </div>
    )
}

async function createNewUserForm(){
    const name = await selectText("Cadastro de cliente", "Nome", "text", "Qual o nome do cliente ?")    
    if(!name.isConfirmed) return false
    const email = await selectText("Cadastro de cliente", "email", "email", "Qual o email do cliente?")
    if(!email.isConfirmed) return false
    const telephone = await selectText("Cadastro de cliente", "number", "number", "Qual o telefone do cliente?")
    if(!telephone.isConfirmed) return false
    const cleaningDay = await selectText("Cadastro de cliente", "Dia, ex: 5", "number", "Em qual dia do mês deve ser feita a faxina ?")
    if(!cleaningDay.isConfirmed) return false
    const cleaningValue = await selectText("Cadastro de cliente", "valor", "number", "Qual o valor combinado para cada faxina ?")
    if(!cleaningValue.isConfirmed) return false
    return {name: name, email: email, telephone: telephone, cleaningDay: cleaningDay, cleaningValue: cleaningValue}
}