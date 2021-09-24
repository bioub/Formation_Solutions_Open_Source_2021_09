<template>
  <div class="home">
    <h2>hello</h2>
    <Hello name="Romain"/>
    <h2>clock</h2>
    <Clock />
    <h2>counter</h2>
    <Counter />
    <h2>login-form</h2>
    <LoginForm />
    <h2>select</h2>
    <Select :selected="prenom" :items="prenoms" @selectedChange="prenom = $event" />
    <p>Vous avez sélectionné : {{prenom}}</p>
    <h2>exercice 1</h2>
    <Helloworld />
    <h2>exercice 2</h2>
    <MultiStateButton :selected="prenom" :items="prenoms" @selectedChange="prenom = $event" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import Clock from '@/components/Clock.vue'
import Counter from '@/components/Counter.vue'
import LoginForm from '@/components/LoginForm.vue'
import Select from '@/components/Select.vue'
import Helloworld from '@/components/Helloworld.vue'
import MultiStateButton from '@/components/MultiStateButton.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    Clock,
    Counter,
    LoginForm,
    Select,
    Helloworld,
    MultiStateButton
  },
  data() {
    return {
      prenoms: ['Toto', 'Titi', 'Tata'],
      prenom: 'Titi',
    }
  }
}
</script>
