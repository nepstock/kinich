<template>
  <b-row>
    <b-col sm="6">
      <b-card class="small">
        <h1 class="h5 font-weight-bolder">Datos de Facturación</h1>
        <hr>
        <p class="font-weight-bolder text-muted mb-0">RFC</p>
        <p>ERF45533GFE</p>
        <p class="font-weight-bolder text-muted mb-0">Razón Social</p>
        <p>Nepestock SA de CV</p>
        <p class="font-weight-bolder text-muted mb-0">Dirección</p>
        <p>Avenida Thiers 254 int 5</p>
        <p class="font-weight-bolder text-muted mb-0">Correo electrónico</p>
        <p class="mb-0">nepestock@gmail.com</p>
        <p class="text-right mb-0 mt-4">
          <b-button variant="link" size="sm">
            Editar información de facturación <i class="far fa-edit ml-2"></i>
          </b-button>
        </p>
      </b-card>
    </b-col>
    <b-col sm="12" class="mt-3">
      <b-card class="small">
        <h1 class="h5 font-weight-bolder">Mis recibos</h1>
        <b-table :items="items" hover head-variant="light" sticky-header small>
          <template v-slot:cell(recibo)="data">
            <b-link to="#">
              {{ data.item.recibo }}
            </b-link>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Payments extends Vue {
  items: Array<object> = [
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" },
    { fecha: "12/05/2020", descripción: "Suscripción mensual", total: "$299.00", recibo: "NP334554434.pdf" }
  ]
}
</script>
