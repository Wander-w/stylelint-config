<template><div>Play</div></template>

<style scoped lang="scss">
.foo {
  position: relative;
  width: 200px;
  height: 200px;
  animation: alternate;

  &-1 {
    position: relative;
    width: 200px;
    height: 200px;
    animation: alternate;
  }

  :global(.foo-2) {
    position: relative;
    width: 200px;
    height: 200px;
    animation: alternate;
  }
}
</style>
