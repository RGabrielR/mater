import React,{useEffect} from 'react';
const Footer = ({focusFurniture, setFocusFurniture}) => {

    return ( 
        <>
        <div className="footer default">
            <div className={`smooth ${focusFurniture === 1 ? "border-top" : "" }`} onClick={() => setFocusFurniture(1)}>
                <p className=" number-footer">01</p>
                <p className="title-footer">Shell Dining Chair</p>
            </div>
            <div className={`smooth ${focusFurniture === 2 ? "border-top" : "" }`} onClick={() =>setFocusFurniture(2)}>
                <p className=" number-footer">02</p>
                <p className="title-footer">Dunes Anthrazite Black</p>
            </div>
        </div>
        </>
    );
}
 
export default Footer;