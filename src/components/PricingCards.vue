<template>
  <div class="pricing-table">
    <b-row>
      <b-col sm="4">
        <div class="pricing-option">
          <h3>Mensual</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            harum voluptatum, sit cum voluptatibus inventore quae qui provident
            eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
            nesciunt sed illo.
          </p>
          <hr />
          <div class="price">
            <div class="front">
              <span class="price">$199.00</span>
            </div>
            <div class="back">
              <a href="#" class="button">Comprar ahora</a>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="pricing-option">
          <h3>Anual</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            harum voluptatum, sit cum voluptatibus inventore quae qui provident
            eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
            nesciunt sed illo.
          </p>
          <hr />
          <div class="price">
            <div class="front">
              <span class="price">$199.00</span>
            </div>
            <div class="back">
              <a href="#" class="button">Comprar ahora</a>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="4">
        <div class="pricing-option">
          <h3>Empresas</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            harum voluptatum, sit cum voluptatibus inventore quae qui provident
            eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
            nesciunt sed illo.
          </p>
          <hr />
          <div class="price">
            <div class="front">
              <span class="price">$199.00</span>
            </div>
            <div class="back">
              <a href="#" class="button">Comprar ahora</a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PricingCards extends Vue {}
</script>
<style lang="scss" scoped>
// variables
$icon-size: 3rem;
$icon-color: #d8d8d8;
$main-color: #f85e6a;

// Pricing table
.pricing-table {
  width: 100%;
  margin-bottom: 4rem;
  .pricing-option {
    border-radius: 10px;
    width: 100%;
    background: white;
    padding: 2%;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:nth-child(even) {
      margin: 0 2%;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      transform: scale(1.04);
      i,
      h3,
      span,
      b {
        color: $main-color;
      }
      .front {
        opacity: 0;
        visibility: hidden;
      }
      .back {
        border-radius: 10px;
        opacity: 1 !important;
        visibility: visible !important;
        a.button {
          transform: translateY(0px) !important;
        }
      }
    }
    hr {
      border: none;
      border-bottom: 1px solid #f0f0f0;
    }
    i {
      font-size: $icon-size;
      color: $icon-color;
      transition: all 0.3s ease-in-out;
    }
    h3 {
      margin: 20px 0;
      color: #212121;
      transition: all 0.3s ease-in-out;
    }
    p {
      color: #999;
      padding: 0 50px;
      line-height: 1.3;
    }
    .price {
      position: relative;
      .front {
        span.price {
          font-size: 2rem;
          text-transform: uppercase;
          margin-top: 20px;
          display: block;
          font-weight: 700;
          position: relative;
          b {
            position: absolute;
            font-size: 1rem;
            margin-left: 2px;
            font-weight: 600;
          }
        }
      }
      .back {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        a.button {
          background: $main-color;
          padding: 15px 20px;
          display: inline-block;
          text-decoration: none;
          color: white;
          position: absolute;
          font-size: 13px;
          top: -5px;
          left: 0;
          right: 0;
          width: 150px;
          margin: auto;
          text-transform: uppercase;
          transform: translateY(20px);
          transition: all 0.3s ease-in-out;
          &:hover {
            background: darken($main-color, 10%);
          }
        }
      }
    }
  }
}

</style>
