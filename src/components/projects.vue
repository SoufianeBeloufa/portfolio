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
            
            <div class="pfe projet slide-bck-center ">
                <p> lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
            </div>
            <div class="outsourcing projet slide-bck-center ">
                <p> lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
            </div>
            <div class="stage projet slide-bck-center ">
                <p> lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
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
  height: 100vh;
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
    left: 10%;
    top: 2%;
}
.work_container{
    margin: 8% 10% 5% 10%;
    display: flex;
    background-color: var(--main-color);
    color: white;
    flex-wrap: nowrap;
    height: 80%;
    width: 80%;    
    position: relative;
    align-items: center;
    justify-content: space-around;
    /* overflow:scroll;  */

}
.projet {
    width: 30%;
    height: 100%;
    border-radius: 5px 5px 5px 5px;
    transition: transform 0.3s ease;
    display: flex;
    /* padding: 1%; */
    justify-content: center;
    align-items: center;
    position: relative;
}

.projet>p {
    font-size: small;
    line-height: 15px;
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 2% 4%;
    border-radius: 5px;
    bottom: 0px;
    height:fit-content;
    /* left: 10px; */
}

.projet:hover > p {
    display: block;
}


.pfe{
    background-color: #aca0badd;

}
.outsourcing{
    background-color: #735893dd;

}
.stage{
    background-color: #4c2776dd;

}


.projet:hover{
    transform: scale(1.3);
    height:100% ;
    z-index:1;

}



@media (max-width: 768px) {
    .projet{
        width: 80%;
        height: 25%;
    }
    .projet:hover{
        height:35% ;
        margin-top: 6%;
    
    }
  .work{
    height: 150vh;
  }
  .work_container{
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
}

</style>

<script>
export default{
    name:'projects_page'
}
</script>