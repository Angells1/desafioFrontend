import styled from 'styled-components';
import { IoIosSearch } from "react-icons/io";

export const Header =  styled.div`

padding: 30px 15px 30px;
border-bottom: 1px solid #fff;
text-align: center;
font-family: sans-serif;
width: 550px;
letter-spacing: 1px;
margin: 0 auto;
`;

export const Content =  styled.div`



`;


export const Title = styled.h1`


color: #fff;
font-size: 2.6em;





`;



export const WeatherBox = styled.div.attrs({



})`
position: relative;
background: #fff3e4;
width: 80%;
padding: 20px 10px;
box-sizing: border-box;
height: 270px;
margin: 15px auto;
text-align: start;

`;


export const City = styled.input.attrs({
    type: ('text'),
    placeholder: ('Insira aqui o nome da Cidade')
})`

width: 75%;
padding: 10px;
font-size: 1.2em;
font-weight: 100;
margin: 10px auto;
background: #fff url('${props => `${props.background}`}') no-repeat right center;
border: 1px solid #999;


::placeholder {
    color: #949494;
   
}

`


export const SpnCity = styled.span.attrs({

})`

font-size: 15px;
font-weight: bold;
color: #4b4b4b;

`;

export const Close = styled.span.attrs({

})`
position: absolute;
top: 2px;
cursor: pointer;
right: 5px;
font-size: 20px;

color: #ff8800;
font-family: Verdana, Geneva, Tahoma, sans-serif;

`;

export const InfoTitle = styled.h1.attrs({

})`

font-size: 40px;
font-weight: bold;
color: #4b4b4b;
margin: 20px 0;

`;


export const DetailInfo = styled.div.attrs({

})`

display: grid;
grid-column-gap: 15px;
grid-template-columns: 1fr 1fr;
width: 75%;


`;



export const Info = styled.span.attrs({

})`


color: #111;
line-height: 40px;
font-size: 0.9em;
color: #5b5b5b;
font-family: sans-serif;
text-align:center;

`;

export const InfoTemp = styled.span.attrs({

})`



color: #5b5b5b;
font-weight: bold;



`;




export const Arrow = styled.span.attrs({

})`
color: #ff8800;
font-size: 20px;


`;

export const Start = styled.div.attrs({

})`


padding: 0 40px;



`;

export const End = styled.div.attrs({

})`

border-top: 2px solid #ffb834;
margin: 0 10px;
padding: 12px 5px;
display: flex;
flex-direction: row;
justify-content: space-around;

`;

export const WeekItem = styled.div.attrs({

})`




display: flex;
flex-direction: column;
flex-wrap: nowrap;


`;

export const Day = styled.span.attrs({

})`

font-weight: bold;
color: #5b5b5b;


`;

export const TempDay = styled.span.attrs({

})`
text-align: center;
font-weight: bold;
color: #ff8800;
margin-top: 5px;
font-size: 0.9em;

`;