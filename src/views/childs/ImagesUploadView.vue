<template>
  <b-row no-gutters>
    <b-col sm="8">
      <Tabs :arrImages="arrPhotos" />
    </b-col>
    <b-col sm="4">
      <b-card class="rounded-0">
        <transition name="slide-fade">
          <div v-if="readyAdd" class="card-form">
            <FormImagesEdit @add="sendImages" />
          </div>
        </transition>
        <transition name="fade">
          <div v-if="!readyAdd" class="card-form text-center">
            <h5 class="mt-5 pt-5">
              Selecciona un elemento para agregar información
            </h5>
            <p class="small">
              Puedes seleccionar varias fotos para colocar la misma información
              o atributos.
            </p>
            <i class="far fa-images fa-4x text-muted"></i>
          </div>
        </transition>
      </b-card>
    </b-col>
    <b-modal ref="modal" id="modal" centered hide-header hide-footer>
      <div class="w-100 p-4">
        <h5 class="my-4">
          Agregue información a su trabajo y envíelo para su revisión.
        </h5>
        <p class="small mb-0 font-weight-bolder">
          Procure que sea posible encontrar su contenido
        </p>
        <p class="small mb-0 ">
          Ingrese descripción detallada, categoría y hasta 50 palabras clave.
        </p>
        <router-link to="#">
          <p class="small">Más información</p>
        </router-link>
        <p class="small mb-0 font-weight-bolder">Contenido de interés</p>
        <router-link to="#">
          <p class="small">Revisar las pautas de contenido editorial</p>
        </router-link>
        <b-button size="sm" @click="$bvModal.hide('modal')" variant="danger">
          Enterado
        </b-button>
      </div>
    </b-modal>

    <b-modal
      ref="modal-success"
      id="modal-success"
      centered
      hide-header
      hide-footer
    >
      <div class="w-100 p-4">
        <h5 class="my-4">
          ¡Felicitaciones por tu primer envío!
        </h5>
        <p class="small">
          Nuestro equipo de verificación integrado por expertos revisará su
          trabajo y brindará comentarios durante los próximos días.
        </p>
        <p class="small">
          Para aumentar al máximo la posibilidad de que se apruebe su trabajo,
          le recomendamos enviar entre 10 y 15 elementos a revisión.
        </p>
        <router-link :to="{name: 'Upload'}">
          <b-button size="sm" variant="danger" class="my-3">
            Envíar más contenido
          </b-button>
        </router-link>
        <router-link to="#">
          <p class="small" @click="$bvModal.hide('modal-success')">Volver al panel</p>
        </router-link>        
      </div>
    </b-modal>
  </b-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import FormImagesEdit from "@/components/FormImagesEdit.vue";
import store from "../../store/index";

@Component({
  components: {
    Tabs,
    FormImagesEdit
  }
})
export default class UploadImagesView extends Vue {
  arrPhotos = [
    {
      file: {
        name: "Nombre",
        img: "https://picsum.photos/250/250/?image=54"
      },
      send: false
    },
    {
      file: {
        name: "Nombre 2",
        img: "https://picsum.photos/250/250/?image=54"
      },
      send: false
    }
  ];


  get arrAdd() {
    return this.$store.state.addInformation.filter(
      (item: any) => item.send === true
    );
  }
  get readyAdd() {
    return this.arrAdd.length > 0 ? true : false;
  }

  sendImages(value: any) {
    console.log(value);
    this.$refs["modal-success"].show();
  }

  created() {
    setTimeout(() => {
      this.$refs["modal"].show();
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.card-form {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
