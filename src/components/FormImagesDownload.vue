<template>
  <div>
    <h1 class="h5 font-weight-bolder mb-4">
      {{ form.name === "" ? "Agrega un título" : form.name }}
    </h1>
    <b-form @submit="onSubmit">
      <b-form-group>
        <label>Seleciona el tamaño de la imagen</label>
        <v-select v-model="form.selected" :options="options" :reduce="item => item.label">
          <template slot="option" slot-scope="option">
            <p class="small mb-0">
              <span class="fa" :class="option.icon"></span>
              <span class="font-weight-bolder ml-1">{{ option.label }}</span>
              <small class="text-body">{{ option.property }}</small>
              <br />
              <small class="text-primary">{{ option.size }}</small>
            </p>
          </template>
        </v-select>
      </b-form-group>
      <hr />
      <b-form-group>
        <b-form-checkbox
          class="d-flex align-items-center"
          id="checkbox-1"
          v-model="form.licence"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Actualizar a licencia mejorada <b-badge variant="warning">PRO $99USD</b-badge>
        </b-form-checkbox>
      </b-form-group>

      <b-form-group>
        <ul class="small">
          <li>Publicidad al aire libre o impresa con circulación o audiencia superior a 500,000</li>
          <li>Uso en mercancía, ropa y obras de arte</li>
          <li>Uso en plantillas de diseño web o impreso</li>
        </ul>
      </b-form-group>



      <b-row class="justify-content-end text-right mt-4">
        <b-col>
          <b-button type="submit" variant="danger" size="sm"
            >Descargar <i class="fas fa-arrow-down ml-2"></i
          ></b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormImagesDownload extends Vue {
  options = [
    {
      label: "Pequeño",
      icon: "fa-image",
      size: "500 x 324 píxeles",
      property: "4.2cm x 2.8cm · 300 DPI · JPEG"
    },
    {
      label: "Mediano",
      icon: "fa-image",
      size: "1000 x 667 píxeles",
      property: "8.5cm x 5.6cm · 300 DPI · JPEG"
    },
    {
      label: "Grande",
      icon: "fa-image",
      size: "4096 x 2731 píxeles",
      property: "34.7cm x 23.1cm · 300 DPI · JPEG"
    }
  ];

  form = {
    id: 0,
    selected: "Pequeño",
    licence: "not_accepted"
  };
  onSubmit(evt: Event) {
    evt.preventDefault();
    // alert(JSON.stringify(this.form));
    this.$emit("download", this.form);
  }

  created() {
    this.form.id = parseInt(this.$route.params.id);
  }
}
</script>

<style scoped>
.vs__dropdown-option--highlight {
  background: #000000 !important;
  color: #fff;
}
</style>
