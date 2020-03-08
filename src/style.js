import styled from 'styled-components';

import { IoIosSearch } from "react-icons/io";
import media from './media';
var image_path = './search-24px.svg';

export const Header =  styled.div`



padding: 20px 15px 10px;
border-bottom: 1px solid #fff;
text-align: center;
font-family: sans-serif;
width: 550px;



letter-spacing: 1px;
margin: 0 auto;
min-width: 310px;



@media (max-width: 585px){
    width: 100%;
    padding: 20px 0px 10px;
   
    
}

@media (max-width: 435px){
   
    padding-top: 2px;
    
}





`;


/*${media.babybear`
     width: 100%;
    background: red;
     border-bottom: 1px solid #000;
   `}*/ 
export const Content =  styled.div`
background: linear-gradient(#ff7b00, #ffbb00) no-repeat;


min-height: 100vh;
display: flex;   
flex-direction: column;
justify-content: space-between;


@media (max-width: 470px){
   
    width: 100%;
    
 }


`;


export const Title = styled.h1`

font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #fff;
font-size: 2.8em;

@media (max-width: 435px){
   
   font-size: 1.8em;
    
 }




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




@media (max-width: 580px){
    width: 100%;
    margin: auto;
    box-shadow: inset 0 4px 15px rgba(0,0,0,.25);
}


@media (max-width: 435px){
    width: 100%;
    padding: 30px 0;
    margin: auto;
 
}

@media (max-width: 330px){
 
    padding: 10px 0;

}


`;


export const City = styled.form.attrs({
    
})`
position: relative;
width: 70%;
text-align: start;
font-size: 1.2em;
font-weight: 100;
margin: 10px auto;
display: flex;
border: 1px solid #999;
background-color: #fff;

@media (max-width: 580px){
    width: 90%;
    margin: 20px auto;
 
   
}




`


export const CityInp = styled.input.attrs({
    type: ('text'),
    placeholder: ('Insira aqui o nome da Cidade')
})`

width: 85%;
padding: 10px;
font-size: 1.2em;
font-weight: 100;
border: none;
background: #fff url('${props => `${props.background}`}') no-repeat right center;




::placeholder {
    color: #949494;
    font-size: 1em;
   
}


`

export const Img = styled.a.attrs({
  href:('')
})`



width: 15%;

  background: url('${props => `${props.background}`}') no-repeat center;  
    background-size: 30px;
    transition: background-color 0.3s linear;

    :hover {
    background-color: #e0e0e0;
}


`;


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



@media (max-width: 435px){
    font-size: 35px;
    margin: 10px 0;
}

@media (max-width: 330px){
    margin: 5px 0 1px;
    font-size: 33px;

}

`;


export const DetailInfo = styled.div.attrs({

})`

display: grid;
grid-column-gap: 15px;
grid-template-columns: 1fr 1fr;
width: 75%;



@media (max-width: 435px){
    grid-column-gap: 2px;
    width: 100%;
}

@media (max-width: 330px){
    grid-template-columns: 1fr;
    grid-column-gap: 5px;
   margin-bottom: 8px;
    width: 100%;

}


`;



export const Info = styled.span.attrs({

})`


color: #111;
line-height: 40px;
font-size: 0.9em;
color: #5b5b5b;
font-family: sans-serif;
text-align:center;


@media (max-width: 330px){
   
    line-height: 30px;

}


`;

export const InfoTemp = styled.span.attrs({

})`



color: #5b5b5b;
font-weight: bold;

@media (max-width: 330px){
    text-align: center;
    line-height: 20px;

}


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

@media (max-width: 330px){
   
    padding: 10px 3px;
}


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



@media (max-width: 330px){
   
   font-size: 0.9em;
    text-indent: 2px;


}


`;

export const TempDay = styled.span.attrs({

})`
text-align: center;
font-weight: bold;
color: #ff8800;
margin-top: 5px;
font-size: 0.9em;

@media (max-width: 330px){
   
    font-weight: 300;
    font-size: 0.8em;
    text-indent: 2px;
}

`;


export const Middle = styled.main`


padding: 2px 8px;
box-sizing: border-box;
width: 450px;
height: 100%;


margin: 0 auto;

@media (max-width: 452px){
 
    width: 100%;
 
   
    
}


`

export const TitleMiddle = styled.h3`

font-size: 2em;
color: #fff;

margin: 15px 0;

`


export const Footer = styled.footer`



margin-top: 20px;
width: 100%;
height: 100px;
background: rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
align-items: center;
color: #fff;
box-sizing: border-box;
min-width: 310px;
`;

export const Lists = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    color: #282828;
    font-size:  15px;
    font-family: sans-serif;
    font-weight: 600;
    margin: 0 auto;
    
    

@media (max-width: 476px){
    width: 100%;
    margin: 0 auto;
    
}


    @media (max-width: 455px){
   
        grid-template-columns: 1fr;
        margin: auto;
 
    
}


`;

export const LeftList = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    list-style-type: none;
    grid-row-gap: 20px;
   


    @media (max-width: 445px){
   
        margin-bottom: 2px;
        width: 70%;
        margin: 5px auto;
    }

`;

export const RightList = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    list-style-type: none;
   
    grid-row-gap: 20px;
   
    @media (max-width: 445px){
   
       
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }

    
`;

export const MinLi = styled.li`



 `;
 

export const MaxLi = styled.li`

 
 
 
 `;

export const CityLi = styled.li`


 
 `;