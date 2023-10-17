<!-- eslint-disable vue/no-deprecated-destroyed-lifecycle -->
<template>
<canvas id="test"></canvas>
  <section id="landing_page">
    <div class="nav">
      <h2 class="logo">SB</h2>
      
          <ul class="menu">
            <li><a href="#landing_page" :class="{ 'active': activeLink === 'landing_page' }">Home</a></li>
            <li><a href="#projects" :class="{ 'active': activeLink === 'projects' }">Projects</a></li>
            <li><a href="#experience" :class="{ 'active': activeLink === 'experience' }">Experience</a></li>
            <li><a href="#about" :class="{ 'active': activeLink === 'about' }">About</a></li>
          </ul>

    </div>

    <div class="landing_content">
      <div class="left_content">
        <div class="content_wrapper">
          <div class="description">
            <h2>Hi, It's Me</h2>
            <h1>I'm <span>Soufiane a</span> Web Developer</h1>
            <p>Let's Transform Your Imaginations into Digital Realities with Creative Vision.
            </p>
          </div>
          <div class="social_media">
            <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </div>
            <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

            </div>
            <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>

            </div>
            <div class="svg">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="right_content">
        <div class="photo">

        </div>
      </div>
    </div>
  </section>
  <section  id="about"> 
    <about_me/>
  </section>


  <section  id="experience"> 
    <about_me/>
  </section>
  <section  id="projects"> 
    <about_me/>
  </section>

</template>
<style>

:root{
  --main-color:#241B18;
  /* --main-color:black; */
  --small-font:20px;
  --medium-font:25px;
  --big-font:40px;
  --second-color:#ddb43b;
  
}
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
canvas { 
   overflow: hidden;
   position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
   width:100%;
   height:100vh;
   background-color:#241B18;
}
#landing_page{
  background-color: var(--main-color);
  font-size: 15px;
  width: 100%;
  height: 100vh;
  display: block;
  /* flex-direction: column;
  flex-wrap: nowrap; */
}
.nav{
  position:fixed;
  width: inherit;
  height: 10%;
  padding-left: -20% ;
  background-color: var(--main-color);
  box-shadow: 2px 9px 17px 2px rgba(0,0,0,0.75);
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-evenly ;
z-index: 200;
}

/* ... other styles ... */

.landing_content {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  height: 95%;
  width: inherit;
}



.right_content {
  order: 2; 
  display: grid;
  place-items:center;
  /* width: 50%; */
  flex: 1 1 50%;
  height: 100%;
  background-color: var(--main-color);
}
.photo{
  /* width: 100px;
  height: 100px; */
  /* border-radius: 50%; */
  /* border-radius: 29px 29px 29px 29px; */
  background-color: #0b0b0b00; /* Change this to your desired color */
  position: relative;
  margin: 50px auto;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); Box shadow for depth effect */
  /* box-shadow: 40px 40px 45px 0px rgba(143,132,132,0.68); */
  /* Add more box-shadow layers for the water droplet effect */
  /* box-shadow: */
    /* 0 0 20px 10px #4e8bff, Inner glow */
    /* 0 0 30px 20px rgba(78, 139, 255, 0.6), Inner light */
    /* 0 0 40px 30px rgba(78, 139, 255, 0.4), Middle glow */
    /* 0 0 50px 40px rgba(78, 139, 255, 0.2); Outer glow */
  /* border-radius: 50% 5% 50% 5% ; */
  background-image: url('../assets/man3.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
  width: 50%;
  height: 60%;
  background-color:#241b1800;
}

.left_content {
  order: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: unset;
  /* width: 50%; */
  flex: 1 1 50%;
  height: 100%;
  background-color: var(--main-color);
}

.content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    
    width: 50%;
    justify-content:center;
}

.description {
  
  width: inherit;
  display: block;
  line-height:40px;
  /* height: 60%; */
  width: 100%;
  padding:50% 2% 10% 2%;
  background-color:var(--main-color);

}

.svg,h2,p,span,h1{
  position: relative;
  color: bisque;
  z-index:12;
}
h1{
  font-size: var(--big-font);
}
span{
  color: var(--second-color);
}
p{
  line-height: 30px;

  font-size: var(--small-font);
}
.social_media {
  color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  background-color: var(--main-color);
}
svg{
  fill: var(--second-color);
}
.svg{
  
  margin: 0 ;
  font-size: 30px;
  
  display: grid;
  place-content: center;
  border: rgb(212, 153, 70) solid 3px;
  border-radius: 50%;
  padding: 10px;
}
/* bar de navigation */

.menu{
  
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  text-decoration: none; 
}
.logo{
  margin-left: -10% ;
  
}
a{
  font-weight: 600;
  text-decoration: none;
  font: var(--medium-font+6px);
  color: bisque;


}
a:hover{
  color: var(--second-color);
  
}
li{
  cursor: pointer;
}
a.active{
  color: #ddb43b;
}
template{
  display: inline-block;
}
/* -------------------------------------------- */
@media (max-width: 768px) {
  :root{
 --small-font:15px
  }
  .nav{
    display: none;
  }
  p{
  line-height: 20px;

  font-size: var(--small-font);
}
h1{
  font-size:var(--medium-font);
}
.photo{
  background-position: bottom;
  height: 80%;
}
  .right_content{
    order: 1;
    height: 50%;
  } 
  .left_content{
    order: 2; 
    height: 50%;
    /* z-index: 300; */
  }
  #about{
    order: 3;
  }
  .description{
    padding-top:0% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
   .left_content,
  .right_content {
   flex: 1 1 100%; /* Take up 100% of the container width on smaller screens */
  } 
  .content_wrapper {
    
    justify-content:start;
}
}




</style>

<script>
import about_me from './about_me.vue';
export default{
  name:'landing_page',
  components: {
    // landing_page,
    about_me,
  },
  data() {
  return {
    activeLink: null,
  };
}
,
mounted() {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
   canvas.addEventListener('mousemove', MouseMove, false);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween( mouse, parts[i] );
   distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();
    
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w){
       li.x = 0; 
    }
    if(li.y > h) {
       li.y = 0; 
    }
    if(li.x < 0) {
       li.x = w; 
    }
    if(li.y < 0) {
       li.y = h; 
    }
   
     
  }
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function MouseMove(e) {
   mouse.x = e.layerX;
   mouse.y = e.layerY;

   //context.fillRect(e.layerX, e.layerY, 5, 5);
   //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();

  //-------------------------------------
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section');
  
  const offset = 100; // Adjust this value as needed
  
  const handleScroll = () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.id;
      }
    });

    this.activeLink = currentSection;
  };

  // Call handleScroll on page load to set initial active link
  handleScroll();

  // Add scroll event listener to update active link on scroll
  window.addEventListener('scroll', handleScroll);

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      // Scroll to the target section smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Set activeLink to the clicked link's href value
      this.activeLink = targetId;
    });
  });
},

beforeUnmount() {
  // Remove the scroll event listener when the component is destroyed to prevent memory leaks
  window.removeEventListener('scroll', this.handleScroll);
}


// animated background 


}

</script>