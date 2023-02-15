import Link from "next/link"

export function Navigation(){
    return (
        <ul style={{display:'flex', listStyle:'none', marginLeft:'.1em'}}>
            <li><Link href="/">Home</Link></li>
            <li style={{marginLeft:'1em'}}><Link href="/transition">Transition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link href="/csstransition">CSSTransition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link href="/switchtransition">SwitchTransition Component</Link></li>
        </ul>
    )
}