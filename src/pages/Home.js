import React, { useState } from 'react';
//import Carousel from "./Carousel";
import "./styles.css";
//import "./Carousel.css";
import Carousel from "react-simply-carousel";

const Home = () => {

  const [activeSlide, setActiveSlide] = useState(0);

   return(
    <div class="begin">
      <h1>WELKOM BIJ HET GROTE WK SPEL!</h1>

      <p>Hier zal je je voetbalkennis op de proef gaan stellen door middel van algemene data en gevoel te gaan voorspellen wie het WK<br />
      over een paar maand gaat winnen. Gebruik de menu knop om bij de voorspelling te komen over de knop hieronder!</p>
     <Carousel
       containerProps={{
         style: {
           width: "100%",
           justifyContent: "space-between",
           userSelect: "text"
         }
       }}
       activeSlideIndex={activeSlide}
       activeSlideProps={{
         style: {
           background: "lightblue"
         }
       }}
       onRequestChange={setActiveSlide}
       forwardBtnProps={{
         children: ">",
         style: {
           width: 30,
           height: 60,
           minWidth: 30,
           alignSelf: "center"
         }
       }}
       backwardBtnProps={{
         children: "<",
         style: {
           width: 30,
           height: 60,
           minWidth: 30,
           alignSelf: "center"
         }
       }}
       dotsNav={{
         show: true,
         itemBtnProps: {
           style: {
             height: 16,
             width: 16,
             borderRadius: "50%",
             border: 0
           }
         },
         activeItemBtnProps: {
           style: {
             height: 16,
             width: 16,
             borderRadius: "50%",
             border: 0,
             background: "black"
           }
         }
       }}
       itemsToShow={1}
       speed={200}
>
<div
style={{
  background: "lightblue",
  width: 300,
  height: 200,
  border: "20px solid white",
  textAlign: "center",
  lineHeight: "140px",
  boxSizing: "border-box",
  wordWrap: "break-word"
}}
key={1}
>
<a href="./Voorspel">
Voorspel nu alle wedstijden!
</a>
</div>

<div
  style={{
    background: "lightblue",
    width: 300,
    height: 200,
    border: "20px solid white",
    textAlign: "center",
    lineHeight: "140px",
    boxSizing: "border-box",
    wordWrap: "break-word"


  }}
  key={2}
>
<a href="./Contact">
Contactgegevens!
</a>
</div>

<div
  style={{
    background: "lightblue",
    width: 300,
    height: 200,
    border: "20px solid white",
    textAlign: "center",
    lineHeight: "140px",
    boxSizing: "border-box",
    wordWrap: "break-word"
  }}
  key={3}
>
<a href="./Teams">
Vind hier alle info!
</a>
</div>

     </Carousel>

  <p>Als je meer over mij wilt weten of zelf een project wilt maken mag je mij altijd contacteren op de sociale media platformen die aangegeven staan<br />
  ga daarvoor naar het kopje contact in het menu of de knop hierboven!</p>
   </div>
 )};

export default Home;
