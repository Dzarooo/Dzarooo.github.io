import { useState } from "react";

export const Header = ({ setActiveSite }) => {

    const handleSiteChange = (site) => {
        switch (site) {
            case 'home':
                setActiveSite('home');
                break;
            case 'about':
                setActiveSite('about');
                break;
            default:
                setActiveSite('home');
        }
    }

    return (
        <header className="h-[5vh] bg-slate-50 flex items-center pl-5 pr-5 justify-between">
            <h1 className="text-xl text-slate-900">React</h1>
            <div className="flex items-center gap-2">
                <p className="cursor-pointer" onClick={() => { handleSiteChange("home") }}>Home</p>
                <p className="cursor-pointer" onClick={() => { handleSiteChange("about") }}>About us</p>
            </div>
        </header>
    );
}