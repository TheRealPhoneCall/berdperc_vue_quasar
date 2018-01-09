<template>
  <div class="row justify-center perc-wrapper" >
    <img 
      :class="`${percJson.image_grid_classes} perc-img`" 
      :src="loadImg(perc.slug, perc.image_front)"
    />
    <div :class="`${percJson.detail_grid_classes}`">
      <q-carousel 
        no-swipe
        arrows 
        dots 
        infinite
        class="text-black carousel full-height"
      >
        <div 
          slot="slide" 
          class="bg-faded"
          v-for="(map, index) of config.maps"
          :key="index"
        >
          <perc-map
            :map="map"
            :perc="perc"
            :percJson="percJson"
          />
        </div>
      </q-carousel>
    </div>
    <q-fab
      color="primary"
      class="fixed"
      style="right: 18px; bottom: 60px"
      icon="keyboard_arrow_left"
      direction="left"
    >
      <q-fab-action
        color="secondary"
        icon="settings"
        @click="runPerc()"
      />      
      <q-fab-action
        color="secondary"
        icon="library_music"
        @click="runPerc()"
      />
      <q-fab-action
        color="secondary"
        icon="send"
        @click="runPerc()"
      />
    </q-fab>
    <div 
      v-for="pad in percJson.pads"
      :key="pad.id"
      :style="[percJson.pads_main_styles, pad.pad_div_styles.position]"
      :class="`pads ${percJson.slug} ${pad.name}`"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {
    QCarousel,
    QFab,
    QFabAction,
    QFixedPosition
  } from 'quasar'

  import PercMap from './PercMap'
  import { percImgMixin } from '../mixins/imageMixins'

  export default {
    components: {
      QCarousel,
      QFab,
      QFabAction,
      QFixedPosition,
      PercMap
    },
    computed: {
      ...mapGetters('perc', ['perc', 'percJson']),
      ...mapGetters('config', ['config']),
      percID () {
        return this.$route.params.percID
      }
    },
    methods: {
      runPerc () {
        // do nothing for now
      }
    },
    created () {
      // dispatch set perc ID on store
      this.$store.dispatch('perc/getDoc', {id: this.percID})
      // this.$store.dispatch('perc/getDocSync', {key: 'id', val: this.percID})

      // dispatch set default config
      this.$store.dispatch('config/getDoc', {name: this.perc.default_map})
      // this.$store.dispatch('config/getDocSync', {key: 'name', val: this.perc.default_map})

      // dispatch percJson index and perc
      this.$store.dispatch('perc/setJsonDoc', this.percID)
    },
    mixins: [percImgMixin]
  }
</script>

<style lang="stylus" scoped>
  .perc-wrapper
    display: flex
    height: 95%

  .perc-img
    margin-top: auto
    margin-bottom: auto
    width: 100%

  .q-carousel-toolbar
    bottom: 100px

  .pad-hit
    opacity: 0.5

  .pads
    margin-top: auto
    margin-bottom: auto

  .pads
    &:hover
      opacity: 0.3
</style>
