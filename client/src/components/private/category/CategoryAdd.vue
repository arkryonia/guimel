<template>
  <div>
    <!-- <t-section-title title='Add a Category'></t-section-title> -->
    <h2 class="backend-title">Add a Category</h2>
    <hr class="backend-line">
    <div class="form-container">
      <label for="name">Nom</label>
      <input type="text" name="name" id="name" v-model="name">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
      <button type="submit" @click="add()">Save</button>
    </div>
  </div>
</template>
<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  import CategoryService from '@/services/CategoryService'
  // import CategoryAdd from '@/components/CategoryAdd'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        name: '',
        description: '',
        cats: [],
      }
    },
    methods: {
      async add() {
        const catdata = {
          name: this.name,
          description: this.description,
        }
        const h = {
          Authorization: `${this.$store.state.token}`,
        }
        try {
          await CategoryService.add(catdata, h)
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