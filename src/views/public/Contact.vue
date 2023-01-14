<template>
  <div class="contact">

    <div class="contact">
      <div class="contact__img">
        <!-- <img src="@/assets/img/message-c.svg" alt="photo de profils">--> 
        <LogoContact/>     
    </div>
      <div class="contact__info">
        <LetterTitle>
          <h1>Contact</h1>
        </LetterTitle>
        <div class="text-center">
          <div>

            <input type="text" name="user_name" v-model="name" placeholder="name" class="pinput" :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }" style="transition-delay: 0.2s" />
          </div>

          <div>
            <input type="email" name="user_email" v-model="email" placeholder="email" class="pinput" :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }" style="transition-delay: 0.4s" />
          </div>

          <div>
            <textarea name="message" v-model="text" placeholder="message" class="pinput" rows="4" :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }" style="transition-delay: 0.6s"></textarea>
          </div>

          <button @click.prevent="sendEmail">
            Envoyer
          </button>
        </div>

        <Snackbar :showSnackbar="showSnackbar" @close="closeSnackbar" :snackbarMessage="snackbarMessage"
          :snackbarColor="snackbarColor" />
      </div>

    </div>
  </div>
</template>
<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
import emailjs from '@emailjs/browser';
import Snackbar from '@/components/help/Snackbar.vue';
import config from '@/config.js'
import LogoContact from '../../components/logo/LogoContact.vue';

export default {
  name: "Contact",
  components: {
    Snackbar,
    LogoContact,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please all the fields";
        this.snackbarColor = "rgb(212, 149, 97)";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: "Natain Bogdan",
        };

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            (result) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Thanks! Message recieved.";
              this.snackbarColor = "#1aa260";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Oops! Something went wrong.";
              this.snackbarColor = "rgb(212, 149, 97)";
            }
          );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: row;
  background-image: var(--image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;

  svg {
    height: auto;
  }

  &__info {
    text-align: left;
    margin-top: 10rem;
    margin-left: 13rem;
    flex: .5;

    p {
      color: rgb(19, 19, 9);
    }
  }

  &__img {
    flex: 1;
    padding: 10rem 2rem 0 0;
  }

  .move-text {
    margin-left: 100px;
  }
}
</style>