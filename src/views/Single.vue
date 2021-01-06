<template>
  <div>
    <header>
      <router-link class="button" tag="div" to="/">&#8592;</router-link>
      <div class="button undoButton" @click="undo">Undo</div>
    </header>
    <main>
      <h1>{{ lastHistoryContact.name }}</h1>
      <div
        v-for="field in lastHistoryContact.fields"
        :key="field.id"
        class="field-container"
        @click="changeField(id)"
      >
          <div class="field">{{ field.name }}</div>
          <span>:</span>
          <div class="field">{{ field.value }}</div>
          <div class="removeButton" @click="removeField([lastHistoryContact.id, field])">
            &#10006;
          </div>
      </div>
      <div class="button addFieldButton" @click="addField(lastHistoryContact.id)">+</div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [],
    };
  },
  created() {
    this.history.push(this.contact);
  },
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id);
    },
    lastHistoryContact() {
      return this.history[this.history.length - 1];
    },
  },
  methods: {
    addField(contactId) {
      this.$store.dispatch('addField', contactId);
    },
    removeField(contactField) {
      // eslint-disable-next-line
      // const rlyRemove = window.confirm(`Are you really want to remove ${contact.name}?`);
      // if (rlyRemove) {
      this.$store.dispatch('removeField', contactField);
      // }
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
  margin-top: 25px;
  background: $grey;
  border-radius: 50%;
}

h1 {
  width: auto;
  margin-bottom: 25px;
}

.field-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.field {
  width: 40%;
  height: 30px;
  padding: 5px;
  margin: 5px;
  background: $grey;
  text-align: center;
}

.removeButton {
  color: rgb(197, 48, 48);
  cursor: pointer;
}
</style>
