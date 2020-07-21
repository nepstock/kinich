<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group>
        <label class="w-100">Tipo de imágen</label>
        <b-form-radio-group
          id="btn-radios-1"
          v-model="form.type"
          :options="typeOptions"
          buttons
          button-variant="outline-primary"
          size="sm"
          name="radios-btn-default"
        ></b-form-radio-group>
      </b-form-group>
      <b-form-group>
        <label class="w-100">Uso</label>
        <b-form-radio-group
          id="btn-radios-1"
          v-model="form.use"
          :options="useOptions"
          buttons
          button-variant="outline-primary"
          size="sm"
          name="radios-btn-default"
        ></b-form-radio-group>
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

      <b-form-group>
        <label class="w-100">Categoría</label>
        <b-form-select
          size="sm"
          v-model="form.categories"
          :options="categories"
        ></b-form-select>
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
          <b-button class="text-uppercase" block="" type="submit" variant="danger" size="sm"
            >Enviar</b-button
          >
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormImagesEdit extends Vue {
  typeOptions = [
    { text: "imágen", value: "image" },
    { text: "ilustración", value: "ilustration" }
  ];
  useOptions = [
    { text: "comercial", value: "comercial" },
    { text: "editorial", value: "editorial" }
  ];
  categories = [
    { value: null, text: "Selecciona una categoría" },
    { value: "a", text: "Paisaje" },
    { value: "b", text: "Países" },
    { value: "c", text: "Gastronomía" },
    { value: "d", text: "Futbol" },
    { value: "e", text: "Belleza" }
  ];
  form = {
    type: "image",
    use: "comercial",
    description: "",
    categories: "",
    tags: []
  };
  show = true;
  onSubmit(evt: Event) {
    evt.preventDefault();
    // alert(JSON.stringify(this.form));
    this.$emit("add", this.form);
  }

  // created() {
  //   this.form.id = parseInt(this.$route.params.id);
  // }
}
</script>
