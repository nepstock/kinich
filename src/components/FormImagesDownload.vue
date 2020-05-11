<template>
  <div>
    <h1 class="h5 font-weight-bolder mb-4">
      {{ form.name === "" ? "Agrega un título" : form.name }}
    </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-2"
        label="Título de tu imagen:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Ingresa el nuevo nombre para tu imagen"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="textarea"
        label="Descripción de tu imagen:"
        label-for="textarea "
      >
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Ingresa alguna descripción..."
          rows="3"
          max-rows="6"
          size="sm"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Tags para tu imagen:" label-for="tags-pills">
        <b-form-tags
          input-id="tags-pills"
          v-model="form.tags"
          tag-variant="primary"
          add-button-text="Agregar"
          add-button-variant="outline-primary"
          tag-pills
          size="sm"
          separator=" "
          placeholder="Ingresa tus tags aquí"
          class="mb-2"
        ></b-form-tags>
      </b-form-group>

      <b-row class="justify-content-end text-right mt-4">
        <b-col>
          <b-button type="submit" variant="danger" size="sm"
            >Descargar <i class="fas fa-arrow-down ml-2"></i></b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormImagesDownload extends Vue {
  form = {
    id: 0,
    name: "",
    description: "",
    tags: []
  };
  show = true;
  onSubmit(evt: Event) {
    evt.preventDefault();
    // alert(JSON.stringify(this.form));
    this.$emit('download', this.form)
  }

  created() {
    this.form.id = parseInt(this.$route.params.id);
  }
}
</script>
