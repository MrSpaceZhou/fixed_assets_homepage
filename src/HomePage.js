import React from "react";
import './HomePage.css';
import imgBackground from './assets/img/background.png';

export default function HomePage(){
    return(
        <div>
            <header className={'headerBackGround'}>
                    <p className='backGroundTitle'>R F I D 固定资产</p>
                    <p className='backGroundCompanyName'>国信数道信息科技有限公司广东分公司</p>
                <div className='headerMenu'>
                    <ul className='headerMenuBar'>
                        <li className='menu-value'><a href=''>网站首页</a></li>
                        <li className=''><a href=''>用户痛点</a></li>
                        <li className=''><a href=''>系统介绍</a></li>
                        <li className=''><a href=''>系统特点</a></li>
                        <li className=''><a href=''>业务场景</a></li>
                        <li className=''><a href=''>系统功能</a></li>
                        <li className=''><a href=''>联系我们</a></li>
                    </ul>
                </div>
            </header>
            <body>
            <div style={{top:'110px',width:'1920'}}>
                <img style={{top:'top:110px',width:'100%',height: 'auto'}} src={imgBackground} alt='RFID固定资产' />
                <h1 className={'blockTwoCompanyName'}>RFID固定资产管理系统</h1>
            </div>
            <div style={{top:'790px',width:'1920px',height:'836px'}}>
                <img />
            </div>
            </body>
        </div>

    )
}