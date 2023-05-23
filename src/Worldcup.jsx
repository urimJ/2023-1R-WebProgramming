
import p01 from './assets/남색대문.png'
import p02 from './assets/바운드.png'
import p03 from './assets/아이들의 시간.jpg'
import p04 from './assets/나, 너, 그, 그녀.jpg'
import p05 from './assets/리지.jpg'
import p06 from './assets/어떤 여자들.jpg'
import p07 from './assets/스펜서.jpg'
import p08 from './assets/카메론 포스트의 잘못된 교육.jpg'
import p09 from './assets/몬스터.jpg'
import p10 from './assets/세이빙 페이스.jpg'
import p11 from './assets/워터 릴리스.jpg'
import p12 from './assets/카조니어.jpg'
import p13 from './assets/반쪽의 이야기.jpg'
import p14 from './assets/타오르는 여인의 초상.jpg'
import p15 from './assets/톰보이.jpg'
import p16 from './assets/비밀은 없다.jpg'

import { useEffect, useState } from 'react'

function Worldcup(){

    const candidate = [
        {name:'남색대문', src: p01},
        {name: '바운드', src: p02},
        {name: '아이들의 시간', src: p03},
        {name: '나, 너, 그, 그녀', src: p04},
        {name: '리지', src: p05},
        {name: '어떤 여자들', src: p06},
        {name: '스펜서', src: p07},
        {name: '카메론 포스트의 잘못된 교육', src: p08},
        {name: '몬스터', src: p09},        
        {name: '세이빙 페이스', src: p10},
        {name: '워터 릴리스', src: p11},
        {name: '카조니어', src: p12},
        {name: '반쪽의 이야기', src: p13},
        {name: '타오르는 여인의 초상', src: p14},
        {name: '톰보이', src: p15},
        {name: '비밀은 없다', src: p16},
    ];

    const [game, setGame] = useState([]);
    const [round, setRound] = useState(0);
    const [nextGame, setNextGame] = useState([]);
    const [clickedImage, setClickedImage] = useState();

    useEffect(()=>{
        setGame(candidate.map( c=> {
            return {name: c.name, src: c.src, order: Math.random()}
        }).sort((l, r) => {
            return l.order - r.order
        }));
    }, []);

    useEffect(()=>{
        if( game.length>1 && round+1 > game.length/2){
            setGame(nextGame);
            setNextGame([]);
            setRound(0);
        }
    }, [round])
    
    useEffect(()=>{
        let timer;
        if (clickedImage) {
            timer = setTimeout(() => {
                setClickedImage(null);
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [clickedImage]);

    if(game.length ===1){
        return <div style={{display: 'flex', flexDirection: 'column', height:'380px'}}>
            <p>!축! 영화 월드컵 우승!!</p>
            <img src={game[0].src} style={{height: '80%', objectFit: 'cover'}} />
            <p>{game[0].name}</p>
        </div>
    }
    if(game.length ===0 || round+1 > game.length/2) return <p>로딩 중입니다...</p>;

    return <div>
        <p>당신만의 영화 월드컵 <b>{game.length ===2 ? "결승": game.length+"강" }</b> {round+1} / {game.length/2} </p>
        <div style={{display: 'flex', flexDirection: 'row', height: '380px',  justifyContent: 'center'}}>
            <img src={game[round*2].src} style={{height: '100%', objectFit: 'cover'}} onClick={ ()=> {
                setNextGame((prev)=> prev.concat(game[round*2]))
                setRound(round => round+1)
            } }/>
            <img src={game[round*2+1].src} style={{height: '100%', objectFit: 'cover'}} onClick={()=>{
                setNextGame((prev)=>prev.concat(game[round*2+1]))
                setRound(round => round +1)
            }}/>
        </div>


    </div>;
}

export default Worldcup;
