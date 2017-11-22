<template>
  <section id="title" class="">
    <div class="block">
      <div class="line">
        <div class="md-8 md-offset-2">
          <div class="name" v-animate-css="'fadeInLeftBig'"> {{title}} </div>
          <hr class="titleHr" v-animate-css="'fadeInRightBig'">
          <p v-animate-css="'fadeInLeftBig'">
            {{resume}}
          </p><br>
          <span class="date" v-animate-css="'fadeInLeftBig'">{{closing}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

  @font-face{
    font-family: title-font;
    src: url('../../../static/fonts/roboto/Coda.ttf');
    font-weight: bolder;
  }

  section#title{
    padding: 50px 0 75px 0;
    background-color: $color;
    color: #fff;
    padding: 100px 60px;

    .md-8{
      text-align: justify;
      float: none!important;
      div.name{
        font-size: 3rem;
        flex-flow: title-font;
        font-weight: bolder;
      }
      p{
        font-size: 1.7rem;
      }
      span.date{
        font-size: 1.2rem;
        font-style: italic;
        color: #eee;
      }
    }
  }
  
</style>

<script>
export default {
  props: {
    title: String,
    resume: String,
    closing: String,
  },
}
</script>


