<template>
  <div class="content">
    <div class="section-img-overlay"></div>
    <div class="lg:w-1/2 w-full z-20">
      <h1
        role="heading"
        class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-200"
      >
        Algoritmo guloso
      </h1>
      <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-200">
        Um algoritmos que tenta resolver o problema fazendo a escolha localmente
        ótima em cada fase com a esperança de encontrar um ótimo global
      </p>
    </div>
    <div
      class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
      role="list"
    >
      <img
        src="https://i.ibb.co/0n6DSS3/bgimg.png"
        class="absolute w-full -ml-12 mt-24"
        alt="background circle images"
      />
      <div
        role="listitem"
        class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
      >
        <div class="md:flex items-center justify-between">
          <h2 class="text-2xl font-semibold leading-6 text-gray-800">
            Mais vantajosa
          </h2>
        </div>
        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">
          Sempre fazendo as escolhas que parecem mais vantajosas naquele momento
        </p>
      </div>
      <div
        role="listitem"
        class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
      >
        <div
          class="w-2.5 h-aut rounded-tl-md rounded-bl-md"
          style="background-color: #0b1c2a"
        ></div>
        <div class="w-full p-8">
          <div class="md:flex items-center justify-between">
            <h2 class="text-2xl font-semibold leading-6 text-gray-800">
              Sem arrependimentos
            </h2>
          </div>
          <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">
            Um algotitmo guloso nunca se arrepende, não desfaz escolhas já
            feitas
          </p>
        </div>
      </div>
      <div
        role="listitem"
        class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
      >
        <div class="md:flex items-center justify-between">
          <h2 class="text-2xl font-semibold leading-6 text-gray-800">
            Algoritmo míope
          </h2>
        </div>
        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600">
          O algoritmo toma decisões com base nas informações disponível na
          iteração corrente, sem olhar as consequências que essas decisões terão
          no futuro
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SummarySlide",
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10em;
  background-image: url("https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;

  .section-img-overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 50%
    );
    background-size: 3px 3px;
    z-index: 2;
  }
}
</style>
