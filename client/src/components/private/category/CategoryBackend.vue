<template>
  <div>
    <section class="main">
      <div class="block">
        <div class="md-10 md-offset-1">
          <div class="line">
            <div class="list categories">
              <ul>
                <li>toutes les catégories</li>
                <li v-for="cat in cats">
                  <strong>{{cat.name}}</strong>
                  <div class="fr">
                    <router-link :to="{name:'CategoryUpdate', params:{id: `${cat.id}` } }" class="update" > Modifier </router-link>
                    <button @click="removeCat(cat.id)" class="" > Supprimer </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import CategoryService from '@/services/CategoryService'
  import TSectionTitle from '@/components/includes/TSectionTitle'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        cats: [],
      }
    },
    async mounted() {
      this.cats = await CategoryService.list()
      try {
        const cats = await this.cats
        this.cats = cats.data
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
    methods: {
      async removeCat(category) {
        try {
          const h = {
            Authorization: `${this.$store.state.token}`,
          }
          await CategoryService.delete(category, h)
          this.$router.push({ name: 'Backend' })
        } catch (error) {
          // eslint-disable-next-line
          console.log(error)
        }
      },
    },
  }
</script>

<style>

</style>