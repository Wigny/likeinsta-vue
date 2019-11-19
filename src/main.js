import Vue from 'vue'
import App from './App.vue'

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from "apollo-cache-inmemory";


Vue.config.productionTip = false

const link = new WebSocketLink({
  uri: 'wss://graphql-likeinsta.herokuapp.com/v1/graphql',
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => {
      return {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': '_graphql-likeinsta'
        }
      };
    },
  }
})

const defaultClient = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient
});

Vue.use(VueApollo);

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
