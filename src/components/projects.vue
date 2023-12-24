<template>
<div class="work">
        <div class="openinig"> 
        <div class="titre">
  <svg class="titre_icon" xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
            
            Works</div>
        <div class="line"></div>
        </div>

          <p class="_presente">Here are some projects I've worked on : </p>
            <div class="work_container">
              <div class="card pfe">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/pfe.png">
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                   <p>A platform for managing final year projects.</p>
                    <router-link to="/pfe_detail" class="link">More</router-link>
                </div>
            </div>
        </div>
        <div class="card outsourcing">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/landing_page.png">
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p> Outsourcing platform.</p>
                    <router-link to="/outsourcing_detail" class="link">More</router-link>
                </div>
            </div>
        </div>
        <div class="card stage">
            <div class="face face1">
                <div class="content">
                    <img src="../assets/stage.png">
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Dashboard</p>
                    <router-link to="#" class="link">More</router-link>
                </div>
            </div>
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
.work{
  position: relative;
  height: auto;
  background-color: var(--main-color);
  display:flex;
  flex-direction: column;
  overflow: hidden;
}
.openinig{
  padding-top: 6%;
  padding-left: 10%;
  /* height: 20%; */
}
.titre{
  padding-right: 2%;
  font-size: var(--medium-font);
  font-weight:600;
  color: #645d6cdd;
  width: fit-content;
  height: fit-content;
}
.line{
  
 
  width: 50%;
  height: 3px;
  background-color: #7b7583dd;
}
._presente{
    max-font-size: 24px; /* Set a maximum font size in pixels */
    min-font-size: 16px;
    left: 12%;
    top: 0.5rem;
}

.work_container{
    margin-top: 8%; 
    align-self:center;
    width: 80%;
    height: 90%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

/******************************************************** */
.work_container .card{
    position: relative;
    cursor: pointer;
    width: 30%;
    height: 80%;
}

.work_container .card .face{
    border-radius: 5px 5px 5px 5px;
    border: var(--main-color) 2px solid;
    /* width: 90%; */
    /* height: 100%; */
    transition: 0.5s;
}

.work_container .card .face1{
    position: relative;
    background: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* height: 60%; */
    transform: translateY(49%);
}

.work_container .card:hover .face1{
    border-radius: 5px 5px 0px 0px;
    border: none;
    background: #ff0057;
    transform: translateY(0);
}

.work_container .card .face1 .content{
    opacity: 0.5;
    transition: 0.5s;
}

.work_container .card:hover .face1 .content{
    opacity: 1;
}

.work_container .card .face.face1 .content img{
    max-width: 100%;
    height: 170px;
    border-radius: 5px 5px 5px 5px;

}

.work_container .card .face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.work_container .card .face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 10px;
    box-sizing:content-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.885);
    transform: translateY(-51%);
}

.work_container .card:hover .face2{
    transform: translateY(0);
    border-radius: 0px 0px 4px 5px;
    border: none;

}
.work_container .card .face2 .content{
  padding: 10px;
  height: 100%;
}

.work_container .card .face2 .content p{
    margin: 0;
    padding: 0;
    color: #000;
}

.work_container .card .face2 .content .link{
    margin: 10px 0 0 60%;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: var(--main-color);
    padding: 10px;
    border: 1px solid var(--main-color);
}

.work_container .card .face2 .content .link:hover{
    background: var(--main-color);
    color: #fff;
}
/************************************************* */









/* .pfe{
    background-color: #aca0badd;
    
}
.outsourcing{
    background-color: #735893dd;

}
.stage{
    background-color: #4c2776dd;
}  */




/* @media (max-width: 300px) {
.work_container .card .face1 .content img{
    max-width: 100px;
    height: 100px;
    border-radius: 5px 5px 5px 5px;

} */


/* } */
@media (max-width: 768px) {
  .work_container .card{
        /* margin-top: -30%; */
        width: 70%;
        height: 36%;
    }
    
  .work{
    /* height: 180vh; */
  }
  .work_container .card .face1 .content img{
    max-width: 200px;
    height: 150px;
    border-radius: 5px 5px 5px 5px;

}
  .work_container{
    /* margin: 8% 0 0 0; */
    flex-direction: column;
    justify-content: space-around;
    /* height: 100%; */
    width: 100%;
  }
}
@media (max-width: 300px) {
.work_container .card .face1 .content img{
    max-width: 100px;
    height: 100px;
    border-radius: 5px 5px 5px 5px;

}

}
</style>

<script>
export default{
    name:'projects_page',
    mounted() {
        // Get all elements that need to be animated
        const pfeElement = document.querySelector('.pfe');
        const outsourcingElement = document.querySelector('.outsourcing');
        const stageElement = document.querySelector('.stage');
    
        // Function to check if an element is at least half in the viewport
        function isHalfInViewport(element) {
          const rect = element.getBoundingClientRect();
          console.log(rect.bottom,"//",rect.height,">>>",window.innerHeight)
          return (
             (rect.bottom >= 0 && (rect.bottom-rect.height/1.5) <= window.innerHeight)
          );
        }
    
        // Function to handle scroll event
        function handle_scroll() {
          if (isHalfInViewport(pfeElement)) {
            console.log("is halfe visible >>>");
            pfeElement.classList.add('pfe_animation');
      } else {
        pfeElement.classList.remove('pfe_animation');
      }
    
          if (isHalfInViewport(outsourcingElement)) {
            outsourcingElement.classList.add('outsourcing_animation');
          } else {
            outsourcingElement.classList.remove('outsourcing_animation');
          }
    
          if (isHalfInViewport(stageElement)) {
            stageElement.classList.add('stage_animation');
          } else {
            stageElement.classList.remove('stage_animation');
          }
        }
       handle_scroll();
        // Add scroll event listener to the window
        window.addEventListener('scroll', handle_scroll);
      },
}
</script>