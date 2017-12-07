<template>
  <div>
    <!-- <t-section-title title='Update a Post'></t-section-title> -->
    <h2 class="backend-title">Update project</h2>
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
import ProjectService from '@/services/ProjectService'
import TSectionTitle from '@/components/includes/TSectionTitle'

export default {
  components: {
    TSectionTitle,
  },
  data() {
    return {
      project: {},
      name: '',
      description: '',
    }
  },
  async mounted() {
    this.project = await ProjectService.details(this.$route.params.id)
    try {
      const response = await this.project
      this.project = response.data
      this.name = this.project.name
      this.description = this.project.description
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
  methods: {
    async update() {
      const data = {
        name: this.name,
        description: this.description,
      }
      const headers = {
        Authorization: this.$store.state.token,
      }
      try {
        await ProjectService.update(this.$route.params.id, data, headers)
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
