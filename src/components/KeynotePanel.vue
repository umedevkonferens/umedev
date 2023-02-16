<!-- <template>
  <div
    v-if="leftBased"
    class="panel-container"
  >
    <div class="image-container">
      <img alt="keynote-speaker-image" />
    </div>
    <div class="text-container"></div>
  </div>
  <div
    v-else
    class="panel-container"
  >
    <div class="text-container"></div>
    <div class="image-container">
      <img alt="keynote-speaker-image" />
    </div>
  </div>
</template> -->

<template>
  <v-card
    class="mx-auto flex-container"
    rounded="0"
  >
    <div class="avatar-container">
      <v-avatar
        color="grey"
        size="200"
      >
        <v-img
          cover
          src="@/assets/johanna_skarpman_sundholm.jpg"
        ></v-img>
      </v-avatar>
      <div>{{ name }}</div>
    </div>
    <div class="text-container">
      <h2>{{ title }}</h2>
      <span>
        <p>
          {{ description }}
        </p></span
      >
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'KeynotePanel',
  props: ['title', 'name', 'description', 'imageSrc', 'leftBased'],
}
</script>

<style scoped>
.flex-container {
  display: flex;
}

.avatar-container {
  flex: 1;
  padding-inline: 2%;
  padding-block: 1%;
  min-width: 220px;
}

.text-container {
  flex: 5;
  margin-inline: 2%;
  margin-block: 1%;
}
</style>
