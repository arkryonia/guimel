<template>
  <div>
    <!-- <t-section-title title='Add a Category'></t-section-title> -->
    <h2 class="backend-title">Add realisation</h2>
    <hr class="backend-line">
    <div class="form-container">
      <label for="name">Label</label>
      <input type="text" name="label" id="label" v-model="label">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
      <button type="submit" @click="add()">Save</button>
    </div>
  </div>
</template>
<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  import RealizationService from '@/services/RealizationService'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        label: '',
        description: '',
      }
    },
    methods: {
      async add() {
        const data = {
          label: this.label,
          description: this.description,
        }
        const h = {
          Authorization: `${this.$store.state.token}`,
        }
        try {
          await RealizationService.add(data, h)
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