<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'"> 
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <h1>
              <strong>
                404
              </strong>
            </h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import THeader from '@/components/includes/THeader'
import TSectionTitle from '@/components/includes/TSectionTitle'
import TFooter from '@/components/includes/TFooter'

export default {
  name: 'errors',
  components: {
    THeader,
    TSectionTitle,
    TFooter,
  },
  data() {
    return {
      name: 'Hoops',
      presentation: 'Il semblerait que .....',
    }
  },
}
</script>
