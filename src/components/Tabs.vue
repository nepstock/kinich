<template>
  <b-card class="rounded-0 card-form" no-body>
    <b-tabs small card>
      <b-tab :title="'Aún no enviado' + ' (' + arrPhotos.length + ')'" active>
        <b-card-text>
          <b-row>
            <b-col>
              <b-alert class="small" show variant="primary">
                <p class="font-weight-bold mb-0">¡Bienvenido!</p>
                <p class="mb-0">
                  Procedamos con la aprobación de su contenido. Seleccioné un
                  elemento, agregue información y enviélo para su revisión.
                </p>
              </b-alert>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              v-for="(item, index) in arrPhotos"
              :key="item.file.name"
              class="px-2"
              sm="3"
            >
              <CheckboxCard @success="updateChecked($event, index)" />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Pendiente">
        <b-row>
          <b-col>
            <b-alert class="small" show variant="warning">
              <p class="font-weight-bold mb-0">Archivos pendientes</p>
              <p class="mb-0">
                Sus elementos pendientes se revisarán en un plazo de 5 días. Lo
                notificaremos cuando la revisión se haya completado.
              </p>
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="item in arrPhotos"
            :key="item.file.name"
            class="px-2"
            sm="3"
          >
            <CheckboxCard state="pending" />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Revisado">
        <b-row>
          <b-col>
            <b-alert class="small" show variant="success">
              <p class="font-weight-bold mb-0">Archivos revisados</p>
              <p class="mb-0">
                Sus elementos revisados se mostrarán durante 21 días, después
                desaparecerán del panel. Favor de revisar los comentarios en
                caso de que existan.
              </p>
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-for="item in arrPhotos"
            :key="item.file.name"
            class="px-2"
            sm="3"
          >
            <CheckboxCard v-b-modal="item.file.name" state="success" />

            <b-modal  hide-footer hide-header centered :id="item.file.name">
              <div  class="p-4 w-100 small text-left">
                <b-row class="d-flex align-items-center" no-gutters>
                  <b-col cols="2">
                    <img :src="item.file.img" :v-else="item.file.name"/>
                  </b-col>
                  <b-col>
                    <h5 class="font-weight-bolder pl-3">{{ item.file.name }}</h5>
                  </b-col>
                </b-row>
                <hr/>
                <p class="font-weight-bold mb-0">Observaciones:</p>
                <p class="mb-0">Nepestock - Mejorar la calidad para colaborar</p>
                <p class="mb-0">Nepestock - Invitación para colaborar</p>
                <p class="font-weight-bold mb-0 mt-4">Motivos de rechazo:</p>
                <p class="mb-0">Nepestock - Infringe las políticas para colaborar</p>
                <p class="mb-0">Nepestock - Invitación para colaborar</p>
              </div>
            </b-modal>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CheckboxCard from "@/components/CheckboxCard.vue";
import store from "../store/index";

@Component({
  components: {
    CheckboxCard
  }
})
export default class Tabs extends Vue {
  @Prop({ default: [] }) arrImages!: Array<any>;
  arrPhotos: Array<any> = [{ file: { name: "name" }, send: false }];

  updateChecked(value: any, index: number) {
    console.log("cheked emited", value, index);
    this.arrPhotos[index].send = value;
    const arrState = this.arrPhotos.map(item => {
      return { send: item.send };
    });
    store.dispatch("uploadAddInformation", arrState);
  }

  mounted() {
    store.dispatch("uploadAddInformation", this.arrPhotos);
    this.arrPhotos = this.arrImages;
  }
}
</script>

<style lang="scss" scoped>
.card-form {
  min-height: 100vh;
}
</style>
