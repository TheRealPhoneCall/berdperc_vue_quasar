<template>
  <div class="col-md-12" >
    <q-range
      v-model="inputRange"
      :min="0"
      :max="127"
      :step="1"
      label
      snap
    />
    <q-range
      v-model="outputRange"
      :min="0"
      :max="127"
      :step="1"
      label
      snap
    />
  </div>
</template>

<script>
  import {
    QRange,
    QKnob
  } from 'quasar'

  export default {
    components: {
      QRange,
      QKnob
    },
    props: [
      'note',
      'padVolume',
      'inputRange',
      'outputRange'
    ]
  }
</script>
