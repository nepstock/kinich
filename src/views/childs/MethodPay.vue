<template>
  <div>
    <b-card class="small">
      <h5 class="font-weight-bolder">Métodos de pago</h5>
      <b-table
        head-variant="light"
        ref="selectableTable"
        selectable
        select-mode="single"
        :items="items"
        :fields="fields"
        @row-selected="onRowSelected"
        responsive="sm"
        small
      >
        <!-- Example scoped slot for select state illustrative purposes -->
        <template v-slot:cell(predeterminado)="{ rowSelected }">
          <template v-if="rowSelected">
            <p class="mb-0"><i class="fas fa-check"></i></p>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MethodPay extends Vue {
  fields = ["predeterminado", "tarjeta", "banco", "acciones"];
  items = [
    {
      tarjeta: "**** **** **** **43",
      banco: "Banorte",
      acciones: "Macdonald"
    },
    { tarjeta: "**** **** **** **42", banco: "Bancomer", acciones: "Shaw" },
    { tarjeta: "**** **** **** **44", banco: "Banamex", acciones: "Wilson" },
    { tarjeta: "**** **** **** **45", banco: "AMEX", acciones: "Carney" }
  ];
  selected = [];

  onRowSelected(items: any) {
    this.selected = items;
    console.log(items[0]);
  }

  mounted() {
    this.$refs.selectableTable.selectRow(2);
  }
}
</script>

<style scoped>

</style>
