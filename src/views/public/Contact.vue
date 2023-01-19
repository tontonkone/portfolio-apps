<template>
  <div class="contact">
    <div class="contact__img" :class="{ 'move-text': collapsed }">
      <h1>
        <LetterAnime :classl="classl" :char="title" :idx=1 />
      </h1>
      <LogoContact />
    </div>
    <div class="contact__info">
      <div class="contact__text">
        <h2>Envoyer moi un message</h2>
        <p> Vous pouvez me contacter par mail: <br/>
          Konemamoudou84@gmail.com
        </p>
      </div>
      <label>
        <input type="text" name="user_name" v-model="name" placeholder="name" />
      </label>

      <label>
        <input type="email" name="user_email" v-model="email" placeholder="email" />
      </label>

      <label>
        <textarea  rows="10" cols="33" name="message" v-model="text" placeholder="message..."></textarea>
      </label>

      <button  class="btn" @click.prevent="sendEmail">
        Envoyer
      </button>
      <Snackbar :showSnackbar="showSnackbar" @close="closeSnackbar" :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor" />
    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import Snackbar from '@/components/help/Snackbar.vue';
import config from '@/config.js'
import LogoContact from '../../components/logo/LogoContact.vue';
import LetterAnime from '@/components/letter/LetterAnime.vue';
import { collapsed } from '@/components/sidebar/state';

export default {
  name: "Contact",
  components: {
    Snackbar,
    LogoContact,
    LetterAnime,
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
      classl: 'text-animate',
      title: 'Contact',
      collapsed
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
@import '../../assets/scss/mixin';

*:focus {
  outline: none;
}
.contact {

  @include displayFlex();
  background-image: var(--image-sb);

  transition: 0.3s all ease-in-out;

  &__text{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 2rem;
  }

  input,
  textarea {

    display: block;
    width: 80%;
    background: transparent;
    padding: 1.2rem;
    margin: .5rem;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.33);

    border: none;
    resize: vertical;

    &:focus{
      border: 2px solid rgb(255, 128, 0);
    }
  }

  svg {
    height: auto;
  }

  &__info {
    margin: auto;
    flex: 1;
    padding: 1rem;
    
    p {
      color: rgb(19, 19, 9);
    }
  }

  &__img {
    flex: 1;
    @include positionLeft();

  }

  .move-text {
    margin-left: 100px;
  }
}
</style>