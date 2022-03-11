<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <h3 class="content"><b>This is an about page</b></h3>
        <p>Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Phasellus enim erat, vestibulum vel,
          aliquam a, posuere eu, velit. Vestibulum fermentum tortor id mi. Cras elementum. Proin mattis lacinia justo.
          Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Donec quis nibh at felis congue commodo.
          Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Mauris dictum facilisis augue. Aliquam
          erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nunc dapibus tortor vel mi dapibus
          sollicitudin. Proin mattis lacinia justo. Nam quis nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Proin mattis lacinia justo. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe e
          veniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque sapien. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.

          Quisque porta. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Integer pellentesque quam vel
          velit. Nullam dapibus fermentum ipsum. Praesent vitae arcu tempor neque lacinia pretium. Nullam eget nisl.
          Vivamus porttitor turpis ac leo. Curabitur sagittis hendrerit ante. Nullam eget nisl. Maecenas lorem.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.content{
  padding-top: 60px;
  text-align: center;
}
</style>
