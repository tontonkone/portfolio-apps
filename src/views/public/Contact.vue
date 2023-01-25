<template>
  <div class="contact">
    <div class="contact__img">
      <h1>
        <LetterAnime :classl="classl" :char="title" :idx=1 />
      </h1>
      <LogoContact />
    </div>
    <div class="contact__info">
      <div class="contact__text">
        <h2>Envoyer moi un message</h2>
        <p> Vous pouvez me contacter par mail: <br/>
          
          <a href="mailto:konemamoudou@gmail.com">👉 Konemamoudou84@gmail.com</a>
        </p>
      </div>
      <label>
        <input type="text" name="from_name" v-model="name" placeholder="name" />
      </label>

      <label>
        <input type="email" name="email" v-model="email" placeholder="email" />
      </label>

      <label>
        <textarea  rows="5" cols="30" name="message" v-model="text" placeholder="message..."></textarea>
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
        this.snackbarMessage = "Tous les champs sont obligatoire";
        this.snackbarColor = "rgb(212, 149, 97)";
      } else {
        var obj = {
          email: this.email,
          from_name: this.name,
          message: this.text,
          to_name: "kone mamoudou",
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
              this.snackbarMessage = "Merci! Message envoyé ";
              this.snackbarColor = "#1aa260";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Oops! erreur ";
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

  padding-top: 10rem;
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
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);

    border: .1px solid var(--color-border-form);
    resize: vertical;
    color: var(--color-text);
    &:focus{
      border: 2px solid rgb(255, 128, 0);
    }
  }

  svg {
    height: auto;
  }

  &__info {
    margin: 1.3rem 0 4rem 3rem;
    flex: 1;
    padding: 1rem;

    h2{
      color: var(--color-link);
    }
    
    p {
      color: var(--color-text);
    }
  }

  &__img {
    flex: 1;
    @include positionLeft();

  }
  a {
    line-height: var(--line-height);
    color: var(--color-link);
    text-decoration: none;
  }
}

@media only screen and (max-width: 1050px) {
  .contact{
    overflow: scroll !important;
    padding-top: 2rem;
  }
}

@media only screen and (max-width: 758px) {


  .contact {
    padding-top: 2rem;
    overflow: scroll;
    @include mobileDisplay();


    &__img{

        padding-right: 2rem;
    }
  }

}
</style>