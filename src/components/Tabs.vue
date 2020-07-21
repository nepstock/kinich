<template>
  <b-card class="rounded-0 card-form" no-body>
    <b-tabs small card>
      <b-tab :title="'Aún no enviado' + ' (' + arrPhotos.length + ')'" active>
        <b-card-text>
          <b-row>
            <b-col>
              <b-alert class="small" show variant="info">
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
        <b-card-text>Tab Pendiente 2</b-card-text>
      </b-tab>
      <b-tab title="Revisado">
        <b-card-text>Tab Revisado 2</b-card-text>
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
