import React, {useState} from 'react';
import {Header, Title, Content, City, WeatherBox, SpnCity,
  InfoTitle, Close, DetailInfo, Info, InfoTemp, End, Start, WeekItem,
Day, TempDay, CityInp, Img, Middle, Footer, TitleMiddle,
LeftList, RightList, Lists, MinLi, MaxLi, CityLi} from './style.js';
import { IoIosClose } from "react-icons/io";
import SearchIcon from './Capturar.JPG';
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import image_path from './search-24px.svg';

function App() {

  function handleDisplay(e) {
    e.preventDefault();
    showComp ? setShowComp(false): setShowComp(true);


  
  }

  const [showComp, setShowComp] = useState(true);


  return (
    <Content>
<Header>
  <Title>Previsão do tempo</Title>
  {showComp ? (					
				 <WeatherBox>
         <Start>
         <SpnCity>Niterói, Rj - Brasil</SpnCity>
         <Close><IoIosClose size='35px' onClick={handleDisplay}/></Close>
         <InfoTitle>20°C Nublado</InfoTitle>
         <DetailInfo>
          <InfoTemp><MdArrowDownward size='25px' color='orange'/>16°
          <MdArrowUpward size='25px' color='orange'/>25°
         </InfoTemp>
         <Info>
           Sensação &nbsp; 
           <strong>
            19°C
           </strong>
         </Info>
         <Info>
           Vento &nbsp; 
           <strong>
            18km/h
           </strong>
         </Info>
         <Info>
           Humidade &nbsp; 
           <strong>
            89%
           </strong>
         </Info>
         </DetailInfo>
         </Start>
         <End>
         <WeekItem>
           <Day>Terça</Day>
           <TempDay>18° 26°</TempDay>
         </WeekItem>
         <WeekItem>
         <Day>Quarta</Day>
         <TempDay>18° 26°</TempDay>
         </WeekItem>
         <WeekItem>
         <Day>Quinta</Day>
         <TempDay>18° 26°</TempDay>
         </WeekItem>
         <WeekItem>
         <Day>Sexta</Day>
         <TempDay>18° 26°</TempDay>
         </WeekItem>
         <WeekItem>
         <Day>Sábado</Day>
         <TempDay>18° 26°</TempDay>
         </WeekItem>
         </End>
       </WeatherBox>
				) : <></>}
 
 


  <City>
    <CityInp ></CityInp>
    <Img background={image_path} onClickCapture={handleDisplay}></Img>
  </City>
  </Header>
  <Middle>
         
    
    <TitleMiddle>Capitais</TitleMiddle>
  <Lists>

    <LeftList>
  
        <MinLi>18°</MinLi>
        <MaxLi>27°</MaxLi>
        <CityLi>Rio de Janeiro</CityLi>
        <MinLi>14°</MinLi>
        <MaxLi>22°</MaxLi>
        <CityLi>São Paulo</CityLi>
        <MinLi>21°</MinLi>
        <MaxLi>22°</MaxLi>
        <CityLi>Belo horizonte</CityLi>
        <MinLi>24°</MinLi>
        <MaxLi>37°</MaxLi>
        <CityLi>Brasília</CityLi>
        <MinLi>24°</MinLi>
        <MaxLi>27°</MaxLi>
        <CityLi>Bélem</CityLi>
        
    </LeftList>
    <RightList>
   
    <MinLi>23°</MinLi>
        <MaxLi>37°</MaxLi>
        <CityLi>Salvador</CityLi>
        <MinLi>5°</MinLi>
        <MaxLi>14°</MaxLi>
        <CityLi>Curitiba</CityLi>
        <MinLi>21°</MinLi>
        <MaxLi>32°</MaxLi>
        <CityLi>Fortaleza</CityLi>
        <MinLi>24°</MinLi>
        <MaxLi>37°</MaxLi>
        <CityLi>Manaus</CityLi>
        <MinLi>28°</MinLi>
        <MaxLi>40°</MaxLi>
        <CityLi>João Pessoa</CityLi>
     
    </RightList>
    
    </Lists>  
    </Middle>
  <Footer>Feito com ❤️ por Gabriel Angelo</Footer>
  </Content>

  );
}

export default App;
