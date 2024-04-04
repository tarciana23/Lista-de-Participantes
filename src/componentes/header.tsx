
import nlwUniteIcon from '../assets/nlx-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header(){

    return(
        <div className="flex itens-center gap-5 py-2">
            <img src={nlwUniteIcon}/>
            <nav className="flex gap-5">
                <a href="" className="font-mediun text-sm text-zinc-300">Eventos</a>
                <NavLink>
                Participantes
                </NavLink>                
            </nav>
        </div>
    )
    
}