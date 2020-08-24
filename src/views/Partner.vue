<template>
  <div class="w-100">
    <section class="bg-partner vertical-h60 d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col class="text-left">
            <h1 class="h2 text-white font-weight-bolder mb-4">
              Comparta su trabajo y comience a ganar dinero
            </h1>
            <b-button v-b-modal.sign-up variant="danger" class="px-4">Comenzar</b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white py-5">
      <b-container>
        <b-row>
          <b-col class="text-left">
            <h5 class="mb-4">Conviértase en colaborador</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card class="p-3 text-center mb-4" no-body>
              <div class="w-100">
                <i class="fas fa-camera fa-3x my-4"></i>
              </div>
              <h5>Crear</h5>
              <p class="small">
                Produzca imágenes y videos de alta calidad para nuestros
                clientes
              </p>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="p-3 text-center mb-4" no-body>
              <div class="w-100">
                <i class="fas fa-file-alt fa-3x my-4"></i>
              </div>
              <h5>Enviar</h5>
              <p class="small">
                Suba su contenido con nuestra plataforma y acceda a consejos
                para tener éxito.
              </p>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="p-3 text-center mb-4" no-body>
              <div class="w-100">
                <i class="fas fa-file-invoice-dollar fa-3x my-4"></i>
              </div>
              <h5>Pagos</h5>
              <p class="small">
                Gane dinero cada vez que uno de nuestros clientes mundiales
                descargue su contenido
              </p>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="p-3 text-center mb-4" no-body>
              <div class="w-100">
                <i class="far fa-user fa-3x my-4"></i>
              </div>
              <h5>Recomendaciones</h5>
              <p class="small">
                Obtenga aún más ingresos recomendando colaboradores y clientes
                nuevos.
              </p>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="pt-5 d-flex align-items-center text-left">
          <b-col cols="12" sm="6">
            <h5 class="font-weight-bolder">Pagos por más de $ 1000 millones</h5>
            <p class="mb-4">
              Durante los últimos 15 años, hemos pagado más de 1000 millones de
              dólares a nuestra comunidad mundial de colaboradores.
            </p>
            <b-button v-b-modal.sign-up variant="outline-dark" size="sm" class="px-4"
              >Unirse ahora</b-button
            >
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../assets/feat1.jpg" alt="test" />
          </b-col>
        </b-row>
        <b-row class="pt-5 d-flex align-items-center text-left">
          <b-col cols="12" sm="6">
            <img src="../assets/feat2.jpg" alt="test" />
          </b-col>
          <b-col cols="12" sm="6">
            <h5 class="font-weight-bolder">
              Únase a nuestra comunidad mundial
            </h5>
            <p class="mb-4">
              Muestre su trabajo y potencie sus capacidades uniéndose a nuestra
              comunidad internacional. Ofrecemos herramientas, consejos y
              asistencia para ayudar a artistas de todo el mundo a obtener aún
              más ganancias.
            </p>
            <b-button variant="outline-dark" size="sm" class="px-4"
              >Obtener ingresos globales</b-button
            >
          </b-col>
        </b-row>
        <b-row class="pt-5 d-flex align-items-center text-left">
          <b-col cols="12" sm="6">
            <h5 class="font-weight-bolder">Mercado mundial</h5>
            <p class="mb-4">
              Nepestock permite que millones de clientes accedan a su
              trabajo. Vea su contenido en todo el mundo, incluso en carteleras
              o películas.
            </p>
            <b-button variant="outline-dark" size="sm" class="px-4"
              >Unirse ahora</b-button
            >
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../assets/feat3.jpg" alt="test" />
          </b-col>
        </b-row>
        <b-row class="text-white pt-5 my-5">
          <b-col cols="12" sm="6">
            <b-card class="p-3 p-sm-5 skill bg-partner2" no-body>
              <h5 class="font-weight-bolder mt-4">Contenido editorial de Nepestock</h5>
              <p>El mejor contenido de noticias, deportes y entretenimiento.</p>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6">
            <b-card class="p-3 p-sm-5 skill bg-partner2" no-body>
              <h5 class="font-weight-bolder mt-4">Nepestock Custom</h5>
              <p>Cree contenido personalizado para marcas.</p>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6">
            <b-card class="p-3 p-sm-5 skill bg-partner2" no-body>
              <h5 class="font-weight-bolder mt-4">Música de Nepestock</h5>
              <p>Envíe pistas de audio de calidad.</p>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6">
            <b-card class="p-3 p-sm-5 skill bg-partner2" no-body>
              <h5 class="font-weight-bolder mt-4">Offset by Nepestock</h5>
              <p>Imágenes auténticas que inspiran.</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-footer vertical-h80 d-flex align-items-center text-white">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" sm="4">
            <h5>Comience a ganar dinero hoy</h5>
            <p class="small">Realice un aporte a Shutterstock y reciba ingresos haciendo lo que más le agrada.</p>
            <b-button variant="danger" v-b-modal.sign-up block>Comenzar ahora</b-button>
            <hr />
            <p class="small">¿Ya tiene una cuenta? <b-button size="sm" variant="light" v-b-modal.login>Iniciar sesión</b-button></p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Partner extends Vue {}
</script>
<style lang="scss" scoped>
.bg-partner {
  background: url("../assets/intro.jpeg") center no-repeat;
  background-size: cover;
}
.bg-partner2 {
  background: url("../assets/intro2.jpg") center no-repeat;
  background-size: cover;
}
.bg-footer {
  background: url("../assets/footer.jpg") center no-repeat;
  background-size: cover;
}
.card.skill{
  min-height: 220px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
</style>
