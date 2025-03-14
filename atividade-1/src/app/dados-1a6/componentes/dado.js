export default function Dado ({valor}){
    const imagens = {
        1:'/lado 1.jpeg',
        2:'/lado 2.jpeg',
        3:'/lado 3.jpeg',
        4:'/lado 4.jpeg',
        5:'/lado 5.jpeg',
        6:'/lado 6.jpeg',

    };

    return(
        <div>
            <img src={imagens[valor]} alt={'Dado com valor ${valor}'} / >
        </div>
    );
};