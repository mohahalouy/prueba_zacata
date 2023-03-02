<template>
  <Suspense>
    <HomeCard></HomeCard>
    <template #fallback>
      <LoaderCard></LoaderCard>
    </template>
  </Suspense>
</template>

<script>
import HomeCard from "./views/HomeCard";
import LoaderCard from "@/components/LoaderCard";

export default {
  name: 'App',
  components: {LoaderCard, HomeCard},
}
</script>

<style lang="scss">
$color_1: #2c3e50;
$font-family_1: Avenir, Helvetica, Arial, sans-serif;

#app {
  font-family: $font-family_1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color_1;
  padding: 40px;
}

</style>
