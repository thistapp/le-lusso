import React from 'react';
import Logo from '../header/logo';


const HeaderMobile = () => {
    return (
        <>
            <div className="col-start-1 col-span-2 w-full relative">
                <Logo />
            </div>
            <div className="col-start-12">
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </>
    )
}

export default HeaderMobile;