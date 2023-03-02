<template>
  <div class="FilterInputContainer">
    <div class="CardInner">
      <label>Filtra tu busqueda</label>
      <div class="container">
        <div class="Icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-search">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <div class="InputContainer">
          <input :value="searchText" @input="$emit('update:searchText', $event.target.value)" placeholder="Buscar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FilterInput",
  props: {
    searchText: String
  },
  emits: ['update:searchText'],
  methods: {
    clearInput() {
      this.$emit('update:searchText', '');
    }
  }
}
</script>

<style scoped lang="scss">
$color_1: #acbdce;
$color_2: #3c4b66;
$color_3: #a9b8c9;
$color_4: #6d7f8f;
$background-color_1: #e2e9f4;
$background-color_2: #e3edf7;
$background-color_3: #eff5fa;


.FilterInputContainer {
  border-radius: 15px;
  background: linear-gradient(-67deg, rgba(200, 216, 231, 0.7), rgba(255, 255, 255, 0.8));
  overflow: hidden;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 12px #c8d8e7;
  width: 380px;
}
.CardInner {
  padding: 16px 16px;
  background-color: $background-color_1;
  border-radius: 15px;
}
.container {
  display: flex;
}
.Icon {
  min-width: 46px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-right: 12px;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 12px #c8d8e7;
  svg {
    transform: translate(-1px, -1px);
  }
}
label {
  display: block;
  color: $color_2;
  margin-bottom: 12px;
  background: linear-gradient(45deg, #6b7b8f, #3c4b66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.InputContainer {
  width: 100%;
  --top-shadow: inset 1px 1px 3px #c5d4e3, inset 2px 2px 6px #c5d4e3;
  --bottom-shadow: inset -2px -2px 4px rgba(255,255,255, .7);
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  &:before {
    left: 0;
    top: 0;
    display: block;
    content: "";
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: var(--bottom-shadow);
  }
  &:after {
    left: 0;
    top: 0;
    display: block;
    content: "";
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: var(--top-shadow);
  }
}
input {
  background-color: $background-color_2;
  padding: 16px 32px;
  border: none;
  display: block;
  font-weight: 600;
  color: $color_3;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;
  &::placeholder {
    color: $color_4;
  }
  &:focus {
    outline: none;
    color: $color_4;
    background-color: $background-color_3;
  }
}

</style>