<template>
  <section class="homeCard">
    <section class="filterInput">
      <FilterInput v-model:searchText="searchContent"></FilterInput>
    </section>
    <section class="Card">
      <PostWrapper :searchContent="searchContent"></PostWrapper>
    </section>
  </section>
</template>

<script>
import FilterInput from "../components/FilterInput";
import PostWrapper from "../components/PostWrapper";

export default {
  name: "HomeCard",
  components: {
    FilterInput,
    PostWrapper
  },
  data() {
    return {
      searchContent: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "https://fonts.googleapis.com/css?family=Poppins:200,300.400,500,600,700,800,900&display=swap";

$font-family_1: 'Poppins', sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family_1;
}

.homeCard {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  grid-template-areas:
    "filterInput"
    "Card";
}


.filterInput {
  grid-area: filterInput;
}

.Card {
  grid-area: Card;
}
</style>