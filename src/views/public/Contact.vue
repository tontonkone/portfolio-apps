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

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
            </div>
        </div>
    </div>
</template>
<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
import {string,objet} from 'yup'
import { object } from 'yup/lib/locale';
export default {
    components: { LetterTitle },
    setup() {

        const schema = object().shape({
            email: string()
                        .required("Email requis")
                        .email("Entrez un email valide"),
            name: string()
                        .required("Nom requis"),
            subject: string()
                        .required("Sujet requis"),
            message: string()
                        .required("Message requis"),
        })
        const values = ref({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        const errors = ref({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
        const load = false;

        const validate = (field)=> {
            schema.value
                   .validateAt(field, values.value)
                   .then(()=>{ 
                       errors.value[field] = "";
                   })
                   .catch((err)=> {
                    errors.value[field] = err.message;
                   });

        }

        const sendMail = () => {
            load.value = true;
            schema.value
                .validate(values.value, { abortEarly: false })
                .then((res) => {
                    errors.value = {};

                    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.value, 'USER_ID')
                        .then(() => {
                            alert('Message sent!')
                            load.value = false;
                            values.value = {};
                        }, (error) => {
                            alert('Message not sent', error);
                        });
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;

    &__info {

        margin-top: 8rem;

        p {
            text-align: left;
        }
    }

    &__img {

        margin-top: 10rem;
        margin-left: 10rem;
        padding: 2rem;
    }

    p {
        color: yellow;
    }
}
</style>