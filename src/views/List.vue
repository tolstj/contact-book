<template>
  <div>
    <header>
      <h1>Contacts</h1>
      <div class="button addButton" @click="addContact" >+</div>
    </header>
    <ul>
      <div class="contact"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <router-link
          tag="li"
          :to="'/contact/' + contact.id"
        >
          {{ contact.name }}
        </router-link>
        <div class="button removeButton" @click="removeContact(contact)">&#10006;</div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    addContact() {
      const newId = this.contacts.length ? this.contacts[this.contacts.length - 1].id + 1 : 1;
      const contact = {
        id: newId,
        name: 'New Contact',
        fields: [],
      };
      this.$store.dispatch('createContact', contact);
      this.$router.push(`/contact/${newId}`);
    },
    removeContact(contact) {
      // eslint-disable-next-line
      const rlyRemove = window.confirm(`Are you really want to remove ${contact.name}?`);
      if (rlyRemove) {
        this.$store.dispatch('removeContact', contact.id);
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>

<style lang="scss" scoped>
$grey: rgb(226, 228, 229);

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
  background: $grey;
  cursor: pointer;
}

.removeButton {
  color: rgb(197, 48, 48);
  background: $grey;
}

.addName {
  width: 100%;
  height: 50px;
}
</style>
