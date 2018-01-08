<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout
      ref="layout"
      view="hHh Lpr fFf"
      :left-class="{'bg-grey-2': true}"
    >
      <q-toolbar slot="header" color="dark">
        <img 
          height="70px" 
          width="auto" 
          src="~statics/berdperc_inverted.png"
          @click="$router.push('/main')"
        />
      </q-toolbar>
      
      <router-view />

      <q-toolbar slot="footer" color="dark">
        
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  }
}
</script>

<style></style>
