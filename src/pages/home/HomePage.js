import { ClientCard } from "../../components/CardClient";
import { Menu } from "../../components/Menu";
import filterIcon from "../../statics/imgs/filterIcon.png"
import addIcon from "../../statics/imgs/addIcon.png"

import "../../statics/css/styleHomePage.css"

export function HomePage(props){

    return (
        <div>
            <Menu />
            <div className="home_page">
                <header className="home_page_header">
                    <img src={addIcon} alt="Um circulo verde com um sinal de mais no meio"/>
                    <img src={filterIcon} alt=""/>
                    <div className="header_modal_filter">
                        
                    </div>
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