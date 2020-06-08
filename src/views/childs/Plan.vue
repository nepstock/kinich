<template>
  <b-row class="d-flex align-items-center">
    <b-col sm="6" class="pl-3">
      <b-card>
        <h5 class="font-weight-bolder">Mi plan</h5>
        <hr>
        <h6 class="text-muted">Suscripción mensual</h6>
        <h5 class="font-weight-bolder mb-3">$299.00</h5>
        <h6 class="text-muted">Siguiente cobro</h6>
        <h5 class="font-weight-bolder mb-3">22/06/2020</h5>
        <h6 class="text-muted">Descargas</h6>
        <h5 class="font-weight-bolder">10 de 30</h5>
        <b-row>
          <b-col class="text-right">
            <b-button variant="danger" size="sm" class="px-4">Cancelar plan</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col sm="6">
      
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Plan extends Vue {}
</script>
