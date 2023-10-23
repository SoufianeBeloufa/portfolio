<template>

<div class="about">
<div class="opening"> 
  <div class="titre">
  <svg class="titre_icon" xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
    
    About me</div>
  <div class="line"></div>
</div>
  <div class="container">
  <!-- <div class="title">
    Who is Soufiane?
  </div> -->
  <div class="about_photo">

   </div>
  <div class="text">
  <p>Hi i am Soufiane Beloufa an Experienced web developer proficient in front-end and back-end
  technologies. Passionate about creating dynamic, user-friendly
  websites and applications. Dedicated to delivering innovative
  solutions and enhancing user experiences.</p>
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
.about{
  width: 100%;
  position: relative;
  background-color: #849acf;
  display:flex;
  justify-content:space-around;
  flex-direction: column;
  overflow: hidden;
}
.titre_icon{
  margin-right: 6px;
}
.opening{
  padding-top: 6%;
  padding-left: 10%;
}
.titre{
  
  display: flex;
  align-items: center;
  padding-right: 2%;
  width: 45%;
  font-size: var(--medium-font);
  font-weight:600;
  color: #645d6cdd;
}
.line{
  
  
  width: 80%;
      height: 1px;
      background-color: #7b7583dd;
}
.container{
    display: flex;
    background-color: #849acf;
    color: white;
    flex-wrap: nowrap;
    height: 100vh;
    width: 100%;    
    justify-content: space-evenly;
    align-items: center;
    position: relative; 

}



.text {
  position: relative;
  flex: 0 0 calc(50% - 20px);
  margin: 10px;
  font-size: var(--small-font);
  background-color: #3f3535;
  line-height: 28px;
  width: 50%;
  height: fit-content;
  padding: 4%;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  z-index: 0;
}


.about_photo{
  flex: 0 0 calc(26% - 20px);
  margin: 10px;
  filter: brightness(45%);
  box-shadow: 28px 28px 10px 0px rgba(0,0,0,0.75);
  border-radius: 0px 170px 170px 0px;
  width: 26%; /* Adjust the width according to your needs */
   padding-top: 26%; /*Maintain a square aspect ratio (height equals width) */
  
  background-image: url('../assets/man0.jpg'); /* Replace '/path/to/your/image.jpg' with the actual path to your image file */
  background-size: cover;
  background-position: center;
  /* z-index: 1; */
}
@media (max-width: 768px) {
  .about_photo,.text{
    flex:none;
  }
  .text{
    /* top: -10%; */
    width: 80%;
  }
  .about_photo{
  box-shadow: 28px 28px 10px 0px rgba(0,0,0,0.75);
  border-radius: 38px 38px 38px 38px;
  width: 60%; /* Adjust the width according to your needs */
  padding-top: 60%; /*Maintain a square aspect ratio (height equals width) */
  
  background-image: url('../assets/man0.jpg'); /* Replace '/path/to/your/image.jpg' with the actual path to your image file */
  background-size: cover;
  background-position: center;
  /* z-index: 1; */
  }
  .container{
    flex-direction: column;
    /* justify-content: space-around; */
  }
}
</style>
<script>
export default {
  name: 'about_me'
}
</script>