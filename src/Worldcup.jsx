
import p01 from './assets/남색대문.'
import p02 from './assets/바운드.'
import p03 from './assets/아이들의 시간.'
import p04 from './assets/나, 너, 그, 그녀.'
import p05 from './assets/리지.'
import p06 from './assets/어떤 여자들.'
import p07 from './assets/스펜서.'
import p08 from './assets/카메론 포스트의 잘못된 교육.'
import p09 from './assets/몬스터.'
import p10 from './assets/세이빙 페이스.'
import p11 from './assets/워터 릴리스.'
import p12 from './assets/카조니어.'
import p13 from './assets/반쪽의 이야기.'
import p14 from './assets/타오르는 여인의 초상.'
import p15 from './assets/톰보이.'
import p16 from './assets/비밀은 없다.'

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

    useEffect(()=>{
        setGame(candidate.map( c=> {
            return {name: c.name, src: c.src, order: Math.E.random()}
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
    

    if(game.length ===1){
        return <div>
            <p>이상형 월드컵 우승</p>
            <img src={game[0]/src} />
            <p>{game[0].name}</p>
        </div>
    }
    if(game.length ===0 || round+1 > game.length/2) return <p>로딩 중입니다...</p>;

    return <div>
        <p>당신만의 영화 월드컵 {round+1} / {game.length/2} <b>{game.length ===2 ? "결승": game.length+"강"}</b> </p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={game[round*2].src} onClick={ ()=> {
                setNextGame((prev)=> prev.concat(game[round*2]))
                setRound(round => round+1)
            } }/>
            <img src={game[round*2+1].src} onClick={()=>{
                setNextGame((prev)=>prev.concat(game[round*2+1]))
                setRound(round => round +1)
            }}/>
        </div>


    </div>;
}

export default Worldcup;
