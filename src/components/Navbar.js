import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

export default function Navbar(){
    return (
        <>
        <header className="header-1">
            <div className="menu">
                <nav>Como funciona</nav>
                <RadioButtonUncheckedIcon style={{fontSize: 10, color: '#0ad4db'}}/>
                <nav>Privacidade</nav>
                <RadioButtonUncheckedIcon style={{fontSize: 10, color: '#0ad4db'}}/>
                <nav>Ajuda</nav>
            </div>
        </header>
        </>
    )
}