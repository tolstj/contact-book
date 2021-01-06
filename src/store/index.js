import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    removeContact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    addField(state, contactId) {
      state.contacts.find((contact) => contact.id === contactId)
        .fields.push({ id: 1, name: 'New field', value: '' });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
  actions: {
    createContact({ commit }, contact) {
      commit('createContact', contact);
    },
    removeContact({ commit }, id) {
      commit('removeContact', id);
    },
    addField({ commit }, contactId) {
      commit('addField', contactId);
    },
  },
  modules: {
  },
  getters: {
    contacts: (s) => s.contacts,
    contactById: (s) => (id) => s.contacts.find((contact) => contact.id === id),
  },
});
