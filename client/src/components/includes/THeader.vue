<template>
  <header>
    <!-- <div class="mobileHeader mobile">

      <div class="nav fl mobile">
        <input type="checkbox" name="toggleButton" id="toggleButton">
        <label for="toggleButton">
          <icon name="bars" class="bars"></icon>
          <icon name="arrow-left" class="arrow"></icon>
        </label>
        <div class="links">
          <router-link to="/about"> A PROPOS </router-link>
          <router-link to="/realisations">REALISATIONS</router-link>
          <router-link to="/projets">PROJETS</router-link>
        </div>
      </div>

      <div class="name fl">
        <router-link to="/"> Hodonou Sounton </router-link>
      </div>

      <div class="search">

      </div>

    </div> -->

    <div class="deskHeader desktop">
      <div class="block" v-animate-css="'zoomIn'">
        <div class="line">

          <div class="name fl">
            <router-link to="/"> Hodonou Sounton </router-link>
          </div>
          
          <div class="menu fr mrm">
            <ul>
              <router-link to="/"> <!-- icon name="home" scale="1.5"></icon --> Accueil </router-link>
              <router-link v-for="cat in cats" :to="{name:'PostByCat', params:{id: `${cat.id}` } }" :key="cat.name"> {{cat.name}} </router-link>            
              <!-- <div class="research mlxl">
                <input type="search" name="" placeholder="" class="field">
                <input type="submit" class="validate" value=" ">
              </div> -->
            </ul>
          </div>
          
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import _ from 'lodash'
import CategoryService from '@/services/CategoryService'

export default {
  data() {
    return {
      cats: [],
    }
  },
  async mounted() {
    this.cats = await CategoryService.list()
    try {
      const response = this.cats
      this.cats = _.orderBy(response.data, 'name')
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
