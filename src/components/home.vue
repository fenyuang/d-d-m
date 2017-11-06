<template>
  <div class="home">
    <div class="section sec1"></div>
    <div class="section sec2"></div>
    <div class="section sec3"></div>
    <div class="section sec4"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted:function(){
    PageSlider.case();
  }
}
</script>

<style>
  html,body{ height:100%; overflow:hidden;}
  .section{ display: none; position:absolute; top:0; left:0; width:100%; height:100%; background-color:#FCC; }
  .section.current{ display:inline-block;}
  .section.next{ display:inline-block; z-index: 2;}
  .section.prev{ display:inline-block; z-index: 2;}
  /*img*/
  .section{background-size: cover;}
  .sec1{background-image: url(./img/banner1.png);}
  .sec2{background-image: url(./img/banner2.png);}
  .sec3{background-image: url(./img/banner3.png);}
  .sec4{background-image: url(./img/banner4.png);}
</style>
