import React from 'react';
import {Header, Title, Content, City, WeatherBox, SpnCity,
  InfoTitle, Close, DetailInfo, Info, InfoTemp, End, Start, WeekItem,
Day, TempDay} from './style.js';
import { IoIosClose } from "react-icons/io";
import SearchIcon from './Capturar.JPG';
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";


function App() {
  return (
    <Content>
<Header>
 
  <Title>Previsão do tempo</Title>
  <WeatherBox>
    <Start>
    <SpnCity>Niterói, Rj - Brasil</SpnCity>
    <Close><IoIosClose size='35px'/></Close>
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
 


  <City 
  background={SearchIcon}
  
  />
  </Header>
  </Content>

  );
}

export default App;
