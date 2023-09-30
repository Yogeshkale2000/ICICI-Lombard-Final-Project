import React from 'react'

import '../../../assests/css/MainHomePage.css'
import HomePageApp from '../../router/mainPageFirstPartICICI/HomePageApp'

export default function MainHomePage() {
    return (
        <>
            <div id='HomeMainPageAfterNav' >
                <div className='HomeMainPageAfterNavsideA' >
                    <h1 id='BanerNameUp' >Over 4 crore customers have faith in</h1>
                    <h1 id='BanerNameDown' >us because we care.</h1>
                </div>
                <div className='HomeMainPageAfterNavsideB' >
                    <img id='mainpagefamily' src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/banner-img.png" alt="familyPhoto " />
                </div>
            </div>
            <div id='mainPageSecondPart' >
                <div id='mainPageSecondPartA' >
                <HomePageApp/>
                </div>
                <div id='mainPageSecondPartB' ></div>
            </div>
            <div id='mainPageSecondPartRemainingPart' ></div>
        </>
    )
}
