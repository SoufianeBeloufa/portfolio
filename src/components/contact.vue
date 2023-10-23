<template>

    <div class="_page">
    <div class="opening"> 
      <div class="titre">
      <svg class="titre_icon" xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
         Contact</div>
      <div class="line"></div>
    </div>
     <div class="contact_page">
           <div class="contact_outil">
              <div class="tel contact-box">
                <div class="tel_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                </div>
                <div class="tel_value">
                    +213-791-032-035
                </div>
              </div>
              <div class="mail contact-box">
                <div class="mail_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                </div>
                <div class="mail_value">
                    s.beloufa@esi-sba.dz
                </div>
              </div>
              <div class="adr contact-box">
                <div class="adr_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                </div>
                <div class="adr_value">
                    Algeria-Mostaganem
                </div>
              </div>
           </div>
           <div class="contact_forme">
            <form action="">
            
         <div class="name">
                  <input class="name_input"
           type="text"
          name="name"
          required
          v-model="name"
        />
        <label for="name">Name</label>
             </div>
             <div class="email">
               <input class="mail_input"
           type="email"
          name="email"
          required
          v-model="email"
        />
        <label for="email">Email</label>
             </div>
             <div class="mail_content">
                <textarea class="message_input"
                name="content" 
                id="content" cols="30" rows="5" 
                required
                 v-model="message">
              </textarea>
             </div>
             <button class="send_button" @click.prevent="handleSubmit" role="button">send</button>
            </form>
            
             
           </div>
     </div>

    </div>
    
    
    
    </template>
    <style>
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    ._page{
      background-color: var(--main-color);
      height: 100vh;
      width: 100%;
      display:block;
    }
    .titre_icon{
      margin-right: 6px;
    }
    .opening{
      padding-top: 6%;
      padding-left: 10%;
    }
    .titre{
      padding-right: 2%;
      font-size: var(--medium-font);
      font-weight:600;
      color: #593363;
      width: fit-content;
      height: fit-content;

      
    }
    .line{  
      width: 80%;
      height: 1px;
      background-color: #7b7583dd;
    }

    .contact_page{ 
        margin: 2% 10% 0% 10%;
        /* background-color: #a6b7c2; */
        width:80%;
        height:75%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .contact_outil{
        /* padding: 5% 10%; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 45%;
        height: 50%;
        /* border: #bbbab700 2px solid; */
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0px 0px 15px 6px rgba(0,0,0,0.95);
        /* opacity: 50%; */
    }
     
    .contact_forme{
        /* padding: 2%; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        height: 100%;
        /* border: #ddb43b 2px solid; */
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0px 0px 15px 6px rgba(0,0,0,0.95);
        /* opacity: 50%; */
    }
    .contact-box{
        border-radius: 10px 10px 10px 10px;  
        width: 80%;
        height: 25%;   
        display: flex;
        align-items: center;
        padding: 0.5%;  
    }
    
    .mail_icon,.adr_icon,.tel_icon{
        border-radius: 10px 10px 10px 10px;
        background-color: var(--main-color);
        width: 15%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7%;
    }

    .tel{
        background-color: #fcd110;

    }

    .mail{
        background-color: #ffffff;

    }

    .adr{
        background-color: #fcd110;
    }

    .tel_icon>svg path ,.adr_icon>svg path{
        fill: #fcd110;
    }
    .mail_icon>svg path{
        fill: #ffffff;
    }
    .name,.email,.mail_content{
      position: relative;
      color: #ffffff;
      /* background-color: #7b7583dd; */
      width: 100%;
    border-radius: 10px 10px 10px 10px; 
    }
    form{
      width: 80%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    
    .name_input,.mail_input,.message_input{
      font-size:16px;
      font-weight: 500;
      color: #fff;
      width: 100%;
      padding: 3%;
      border: none;
      border-radius: 10px 10px 10px 10px; 
      background-color: transparent;
      outline: 2px solid #fcd110;
      transition: outline-color 500ms;

    }
    
    .name_input:is(:focus, :valid),
.mail_input:is(:focus, :valid),
.message_input:is(:focus, :valid) {
    outline-color: #593363;
}
label{
      width: 30%;
      font-size:16px;
      position: absolute;
      left:0;
      top: 0;
      translate: 30% 65%;
      transition: translate 500ms, scale 500ms ;

    }
    .name_input:focus +
    label,
    .name_input:valid +
    label,
    .mail_input:focus +
    label,
    .mail_input:valid +
    label{
      font-size:16px;
      padding-inline: 5px;
      translate: 20% -60%;
      scale: 0.8;
      background-color:var(--main-color);
    }

    /* button{
      display: inline-block;
      font-size: 17px;
      font-weight: 500;
      background-color: transparent;
      width: 20%;
      padding: 8px;
      outline: 2px solid #fcd110;
      border:none;
      border-radius: 10px 10px 10px 10px; 


    } */
    /*----------------------------------------*/

.send_button {
  background-image: linear-gradient(92.88deg, #bda640 9.16%, #dbbb2e 43.89%, #fcd110 64.72%);
  border-radius: 10px 10px 10px 10px; 
  border-style: none;
  box-sizing: border-box;
  color: #000000de;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 17px;
  font-weight: 500;
  height: 3rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.send_button:hover {
  box-shadow: #fcd110 0 1px 30px;
  transition-duration: .7s;
}

@media (max-width: 768px) {
  .send_button {
    padding: 0 2rem;
  }
   .contact_page{
    flex-direction: column;
    justify-content: space-around;
   }
  .contact_outil,.contact_forme{
    width: 100%;
  }
  .contact_forme{
    height: 80%;
  }
  .contact_outil{
    box-shadow: none;

    flex-direction: row;
    height: 6%;

  }
  .mail_value,.tel_value,.adr_value{
 display: none;
  }
  .contact-box{
    width:15%;
    height: 100%;
  }
  .mail_icon,.adr_icon,.tel_icon{
        border-radius: 10px 10px 10px 10px;
        width: 100%;
        height: 100%;
        margin-right: 0;
    }
    label{
      font-size:13px;
      translate: 30% 65%;
      transition: translate 500ms, scale 500ms ;

    }
}


    /*-------------------------------------------------------*/
    </style>
    <script>
    export default {
      name: 'about_me'
    }
    </script>