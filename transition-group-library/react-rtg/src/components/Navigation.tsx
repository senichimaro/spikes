import {
    Link
} from "react-router-dom"

export function Navigation(){
    return (
        <ul style={{display:'flex', listStyle:'none', marginLeft:'.1em'}}>
            <li><Link to="/">Home</Link></li>
            <li style={{marginLeft:'1em'}}><Link to="/transition">Transition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link to="/csstransition">CSSTransition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link to="/switchtransition">SwitchTransition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link to="/transitiongroup">TransitionGroup Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link to="/stylevariables">Style Variables</Link></li>
        </ul>
    )
}