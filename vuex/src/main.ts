import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

import './assets/main.css'
const store = createStore({
    state () {
      return {
        framework: {
          name: 'Vue3',
          components: [
            'Root component',
            'Button component'
          ]
        }
      }
    },
    mutations: {
      addComponent (state, newComponent) {
        state.framework.components.push(newComponent);
      },
      removeComponent (state, componentToDelete) {
        var newComponentsState = state.framework.components.filter(c => c != componentToDelete);
        state.framework.components = newComponentsState;
      }
    },
    getters: {
      getComponents (state) {
        return state.framework.components;
      }
    },
    actions: {
      addComponentWithDelay: async function(state, newComponent) {
        await new Promise(resolve => setTimeout(resolve, 500));
        state.commit('addComponent', newComponent);
      }
    }
  }
)
  
  const app = createApp(App);
  app.use(store);
  app.mount('#app');
