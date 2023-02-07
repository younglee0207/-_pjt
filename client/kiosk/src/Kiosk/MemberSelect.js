import React from "react";
import styles from "./MemberSelect.module.css"
// import { Route } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { useLocation, useNavigate } from "react-router-dom";

function MemberSelect(props) {
    const navigate = useNavigate()

    const location = useLocation()

    const isnavigate = location.state
    
    console.log(location)

    const goBack = () => {
        navigate(-1)
    }
    const onClickHandlerHome = () => {
        navigate('/')
    }
    const onClickHandlerUse = () => {
        navigate('/DonateUse', {state: isnavigate})
    }
    const onClickHandlerBarcodeRead =() => {
        navigate('/BarcodeRead', {state: isnavigate})
    }

    return (
        <div>
            <div className={styles.myImg}>
                <button className={styles.circle} onClick={goBack}>
                {/* 수령인지 기부인지 확인하고 뒤로가기 바꾸기 */}
                    <AiOutlineArrowLeft className={styles.iconStyle}/>
                </button>
                <button className={styles.buttonLeft} onClick={onClickHandlerUse}>
                    <p>회원</p>
                </button>
                <button className={styles.buttonRight} onClick={onClickHandlerBarcodeRead}>
                    <p>비회원</p>
                </button>
                <button className={styles.homeCircle} onClick={onClickHandlerHome}>
                    <BiHomeAlt className={styles.iconStyle}/>
                </button>
            </div>
        </div>
        )
}

export default MemberSelect