<template>
<div class="_container">
     <div class="_video">
      <video controls>
        <source src="../assets/pfe.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
     </div>
     <div class="projet_detail">
        <div class="meta_data">
          <h3>Meta data</h3>
          <div class="grid">
            <div class="_title">
                <div class="titl">Title :</div>
                <div>PFE [Projet de fin d'etudes]</div>
            </div>
            <div class="_role">
              <div class="titl">Role :</div>
              <div>Backend developer</div>

            </div>
            <div class="_duration">
              <div class="titl">Duration :</div>
              <div>3 monthes</div>

            </div>
            <div class="_team">
              <div class="titl">Team size :</div>
              <div>5</div>

            </div>
          </div>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <div>
            This project offers automatic management of the
             end-of-studies projects at ESI Sidi Bel Abbès,
              targeting four users: the administrator, the 
              teacher, the student, and the company. The aim
               is to facilitate various interactions among 
               them and enhance the management of different
                projects by automating several processes
          </div>
        </div>
        <div class="technologies">
          <h3>Technologies</h3>
          <div>
          <span class="tag">Vue.js</span>
          <span class="tag">Express.js</span>
          <span class="tag">JWT</span>
          <span class="tag">Mysql</span>
        </div>
          
        </div>
     </div>
</div>
</template>

<style>

._container{
  padding: 0 1%;
  gap: 3%;
  margin:auto;
  border-radius: 10px;
  margin-top: 5px;
  background-color: #333;
  width: 99%;
  height: 97vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

._video{
  display: flex;
  justify-content: center;
  align-items: center;
  flex:40%;
  padding: 40px;
  border-radius: 10px;
  /* width: 45%; */
  height: 60%;
  border: #282a26 solid 2px;
  background: #000;
}
video{
border-radius: 15px;
width: 100%;
height: 100%;

}
.projet_detail{
  /* background-color: #333; */
  /* width: 50%; */
  display: flex;
  flex:50%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  /* height: 90vh; */
  border: #1f2340 solid 2px;
  border-radius: 15px;
  color: aqua;
}
.projet_detail div{
  padding: 2%;
width: 100%;
}
.meta_data{

/* height: 25%; */
/* background-color: #fff; */
}
.overview{
/* height: 50%; */
/* background-color: #612ed9; */
}
.technologies{
/* height: 25%; */
/* background-color: #ffffff; */
}

.grid{
  margin: 1% 2%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* This will create 3 columns with equal width */
  grid-gap: 0%;
 
}
.grid div{
  display:inline;
  font-size: 1rem;
}
.titl{
  margin-right: 6%;
  
  font-weight: 600;
}
.overview div{
  margin: 5% 2%;
}


@keyframes _fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CSS for the animation */
.tag{
  opacity: 0;
  transform: translateY(-20px);
  animation: _fadeIn 0.5s ease forwards;
  animation-delay: calc(0.3s * var(--index)); /* Delay the animation based on index */
}


.technologies div{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag {
  background-color: #007bff;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
}

@media (max-width: 768px) {
   ._container{
    height:fit-content;
   }
  ._video,.projet_detail{
    flex: 100%;
  }
  
   ._video{
    /* height: 40%; */
   }
   .projet_detail{
    /* height: 60%; */
   }
}
</style>

<script>
import { defineComponent } from "vue";
    export default defineComponent( {
      name: 'stage_detail',
      mounted(){
        const tags = document.querySelectorAll('.tag');

tags.forEach((tag, index) => {
  tag.style.setProperty('--index', index);
});
      }
     

      })
</script>