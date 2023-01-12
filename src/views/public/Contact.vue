<template>
  <div class="contact">

    <div class="container">
      <div class="container__img">
        <img src="@/assets/img/message-c.svg" alt="photo de profils">
      </div>

      <div class="container__info">
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

export default {
  name: "Contact",
  components: {
    Snackbar,
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

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  width: 50%;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }

  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>