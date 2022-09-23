  import React, { useState } from 'react';
  import "./styles.css";
  import Carousel from "react-simply-carousel";

  const Contact = () => {

    const [activeSlide, setActiveSlide] = useState(0);

     return(
      <div class="begin">
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
    border: "30px solid white",
    textAlign: "center",
    lineHeight: "140px",
    boxSizing: "border-box",
    wordWrap: "break-word"
  }}
  key={1}
  >
  <a href="https://www.linkedin.com/in/lars-stam-756b5a1a9/" target="_blank">
  LinkedIn
  </a>
  </div>

  <div
    style={{
      background: "lightblue",
      width: 300,
      height: 200,
      border: "30px solid white",
      textAlign: "center",
      lineHeight: "140px",
      boxSizing: "border-box",
      wordWrap: "break-word"


    }}
    key={2}
  >
  <a href="https://www.facebook.com/profile.php?id=100008502546358" target="_blank">
  Facebook
  </a>
  </div>

  <div
    style={{
      background: "lightblue",
      width: 300,
      height: 200,
      border: "30px solid white",
      textAlign: "center",
      lineHeight: "140px",
      boxSizing: "border-box",
      wordWrap: "break-word"
    }}
    key={3}
  >
  <a href="https://www.instagram.com/larsdestam/" target="_blank">
  Instagram
  </a>
  </div>

       </Carousel>
     </div>
   )};

export default Contact;
