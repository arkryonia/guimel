<template>
  <div>
    <!-- <t-section-title title='Update a Post'></t-section-title> -->
    <h2 class="backend-title">Modifier la catégorie</h2>
    <hr class="backend-line">
    <div class="form-container">
      <label for="title">Nom</label>
      <input type="text" name="name" id="name" v-model="name">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
      <button type="submit" @click="update()">Modifier</button>
    </div>
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
      category: {},
      name: '',
      description: '',
    }
  },
  async mounted() {
    this.cat = await CategoryService.details(this.$route.params.id)
    try {
      const response = await this.cat
      this.cat = response.data
      this.name = this.cat.name
      this.description = this.cat.description
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
  methods: {
    async update() {
      const catdata = {
        name: this.name,
        description: this.description,
      }
      const headers = {
        Authorization: this.$store.state.token,
      }
      try {
        await CategoryService.update(this.$route.params.id, catdata, headers)
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
