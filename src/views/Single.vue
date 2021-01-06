<template>
  <div>
    <header>
      <router-link class="button" tag="div" to="/">&#8592;</router-link>
      <div class="button undoButton" @click="undo">Undo</div>
    </header>
    <main>
      <h1>{{ contact.name }}</h1>
      <div class="button addFieldButton" @click="addField(contact.id)">+</div>
      <div v-for="(field, i) in contact.fields" :key="i">
        <span>{{ field.name }}</span> : <span>{{ field.value }}</span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [this.contact],
    };
  },
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id);
    },
  },
  methods: {
    addField(contactId) {
      this.$store.dispatch('addField', contactId);
    },
    undo() {

    },
  },
};
</script>

<style lang="scss" scoped>
$grey: rgb(226, 228, 229);

header {
  justify-content: space-between;
}

.undoButton {
  font-size: 24px;
}

.addFieldButton {
  margin: 0 auto;
  margin-top: 15px;
  background: $grey;
  border-radius: 50%;
}

h1 {
  width: auto;
}
</style>
