<template>
  <div class="contact">

    <div class="contact">
      <div class="contact__img">
        <LogoContact/>     
    </div>
      <div class="contact__info">
        <h1>
          <LetterAnime :classl="classl" :char="title" :idx=1 />
        </h1>
       <div class="text-center">
          <div>

            <input type="text" name="user_name" v-model="name" placeholder="name"/>
          </div>

          <div>
            <input type="email" name="user_email" v-model="email" placeholder="email"/>
          </div>

          <div>
            <textarea name="message" v-model="text" placeholder="message" ></textarea>
          </div>

          <button @click.prevent="sendEmail">
            Envoyer
          </button>
        </div>

        <Snackbar 
          :showSnackbar="showSnackbar" 
          @close="closeSnackbar" 
          :snackbarMessage="snackbarMessage"
          :snackbarColor="snackbarColor" />
      </div>

    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import Snackbar from '@/components/help/Snackbar.vue';
import config from '@/config.js'
import LogoContact from '../../components/logo/LogoContact.vue';
import LetterAnime from '@/components/letter/LetterAnime.vue';

export default {
  name: "Contact",
  components: {
    Snackbar,
    LogoContact,
    LetterAnime
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
      classl:'text-animate',
      title: 'Contact'
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
  background-image: var(--image-sb);
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