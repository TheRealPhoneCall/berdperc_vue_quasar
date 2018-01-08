<template>
    <div class="row justify-center">
      <q-card 
        inline
        color="secondary"
        v-for="(pad, key) in map"
        :key="key"
        :label="key"
        :class="getPadGridClass(key)"
      >
        <perc-map-pad 
          :pad="pad" 
          :padJson="getPadJson(key)" 
          :padKey="key" 
        />
      </q-card>
    </div>
</template>

<script>
  import {
    QCard,
    QCardMedia,
    QCardTitle,
    QCardActions
  } from 'quasar'
  import PercMapPad from './PercMapPad'

  export default {
    components: {
      QCard,
      QCardMedia,
      QCardTitle,
      QCardActions,
      PercMapPad
    },
    methods: {
      getPadJson (key) {
        return this.percJson.pads.find(pad => pad.name === key)
      },
      getPadGridClass (key) {
        const pad = this.getPadJson(key)
        return pad.pad_grid_classes
      }
    },
    props: [
      'map', 'perc', 'percJson'
    ]
  }
</script>
