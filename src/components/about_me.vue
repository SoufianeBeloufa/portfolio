<template>

<div class="container">
  <!-- <div class="title">
    Who is Soufiane?
  </div> -->
  <div class="about_photo">

</div>
  <div class="text">
      Experienced web developer proficient in front-end and back-end
  technologies. Passionate about creating dynamic, user-friendly
  websites and applications. Dedicated to delivering innovative
  solutions and enhancing user experiences.
  </div>
    
</div>


</template>
<style>
*{
    margin: 0;
    box-sizing: border-box;
}
.container{
    display: flex;
    z-index: 1;
    background-color: var(--main-color);
    color: white;
    height: 100vh;
    width: 100%;    
    justify-content: space-evenly;
    align-items: center;
    position: relative; 
    overflow: hidden;

}
.title{
    position: absolute;
    top: 15%;
    left: 10%;
    font-size: 40px;
    width: fit-content;
    height: fit-content;
    align-items: flex-start;
}
.text{
  border: 2px var(--second-color) solid;
  padding: 1%;
  border-radius: 5%;
    font-size: var(--medium-font);
    line-height:28px;
    /* position: absolute; */
    /* top: 40%; */
    /* left: 15%; */
    width: 50%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
}
.about_photo{
  /* position: absolute; */
  width: 26%; /* Adjust the width according to your needs */
   padding-top: 26%; /*Maintain a square aspect ratio (height equals width) */
  /* height: 50%; */
  border-radius: 50%;
  /* top: 15%; */
  /* left: 55%; */
  background-image: url('../assets/man0.jpg'); /* Replace '/path/to/your/image.jpg' with the actual path to your image file */
  background-size: cover;
  background-position: center;
  z-index: 1;
}
</style>
<script>
export default {
  name: 'about_me'
}
</script>