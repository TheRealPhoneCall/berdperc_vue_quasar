<template>
  <div class="row justified-center layout-padding">
    <div class="col-xs-12"/>
    <br/>
    <div class="col-xs-12">
      <div class="row">
        <div 
          class="col-xs-12 col-sm-6 col-md-4 clearfix"
          v-for="perc in percs" 
          :key="perc.name"
        >
          <q-card inline color="faded" class="perc-card">
            <q-card-media class="card-img">
              <img
                class="perc-img full-height"
                @click="goToPerc(perc.id)"
                :src="loadImg(perc.slug, perc.image_png)"
              >
              <q-card-title slot="overlay">
                {{perc.name}}
                <span slot="subtitle">{{perc.description}}</span>
              </q-card-title>
            </q-card-media>
            <q-card-actions>
              <q-btn flat @click="goToPerc(perc.id)">Run</q-btn>
              <q-btn flat>Edit</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import {
    QCard,
    QCardMedia,
    QCardTitle,
    QCardActions,
    QBtn
  } from 'quasar'

  import { percImgMixin } from './mixins/imageMixins'

  export default {
    components: {
      QCard,
      QCardMedia,
      QCardTitle,
      QCardActions,
      QBtn
    },
    computed: {
      ...mapGetters('perc', ['percs'])
    },
    methods: {
      goToPerc (percID) {
        this.$router.push({name: 'perc', params: { percID }})
      }
    },
    mixins: [percImgMixin]
  }
</script>

<style lang="stylus" scoped>
  .perc-card
    width: 95%
    height: 500px
    display: table-cell
    vertical-align: middle
  
  .card-img
    height: 450px

  .perc-img
    margin-top auto
    margin-bottom auto
    margin-left auto
    margin-right auto    
    width: auto
    height: auto
</style>
