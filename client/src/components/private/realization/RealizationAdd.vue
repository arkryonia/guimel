<template>
  <div>
    <!-- <t-section-title title='Add a Category'></t-section-title> -->
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div class="form-container">
              <label for="name">Label</label>
              <input type="text" name="label" id="label" v-model="label">
              <label for="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
              <button type="submit" @click="add()">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
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