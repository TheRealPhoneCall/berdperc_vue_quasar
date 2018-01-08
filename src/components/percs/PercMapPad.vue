<template>
  <div class="row">
    <q-tabs class="col-xs-12">
      <q-tab 
        v-for="(note, index) in pad.notes"
        :key="index"
        :name="`${index}`"
        :label="note.name"
        :default="index===0 ? true : false"
        slot="title"
      />
      <q-tab-pane
        v-for="(note, index) in pad.notes"
        :key="index"
        :name="`${index}`"
      >
        {{ note.note }} | {{ note.name }}
        <perc-map-pad-note 
          :note="note"
          :padVolume="50"
          :inputRange="inputRange(note)"
          :outputRange="outputRange(note)"
        />
      </q-tab-pane>
    </q-tabs>
  </div>
</template>

<script>
  import {
    QTabs,
    QTab,
    QTabPane
  } from 'quasar'

  import PercMapPadNote from './PercMapPadNote'

  export default {
    components: {
      QTabs,
      QTab,
      QTabPane,
      PercMapPadNote
    },
    props: [
      'pad', 'padJson', 'padKey'
    ],
    methods: {
      inputRange (value) {
        return {min: value.min_vel_in, max: value.max_vel_in}
      },
      outputRange (value) {
        return {min: value.min_vel_out, max: value.max_vel_out}
      }
    }
  }
</script>
