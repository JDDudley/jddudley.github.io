<template>
  <v-container fluid class="white" id="contact">
    <h2 class="text-uppercase font-weight-bold text-center ma-3">Get In Touch</h2>
      <v-form v-model="valid" ref="form" lazy-validation class="max-700">
      <p>Do you have any questions about ways I can help you optimize your online prescence? Shoot me a message below and I'll be in contact as quickly as possible.</p>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-textarea label="Message" v-model="message" required>
        </v-textarea>
        <div class="text-right">
            <v-btn tile @click="clear" color="secondary" class="black--text">clear</v-btn>
            <v-btn tile @click="submit" :disabled="!valid" color="accent">submit</v-btn>
        </div>
      </v-form>
      <v-snackbar :timeout="successTimeout" color="success" v-model="successSnack">
        Thank you for contacting us, we'll reach out as quickly as we can.
      </v-snackbar>
  </v-container>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'contact',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid.'
      ],
      message: '',
      successSnack: false,
      successTimeout: 5000
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          axios.post('//formspree.io/jason@jddudley.com', {
            name: this.name,
            email: this.email,
            message: this.message
          })
          this.successSnack = true
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .form-div {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
  }
</style>