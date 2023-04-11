<template>
  <button @click="addComponent">Add Component</button>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
export default {
  methods: {
   /* ...mapActions([
      'addComponentWithDelay'
    ]),*/
    addComponent() {
      this.$store.commit('addComponent', 'New component');
      //this.$store.dispatch('addComponentWithDelay',  'New component with delay');
      //this.addComponentWithDelay('New Component from Vue method');
    }
  }
}
</script>

<style scoped>
  button {
    background-color: #0095ff;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    margin-right: 10px;
    outline: none;
    padding: 8px .8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
    margin-top: 20px;
  }
</style>