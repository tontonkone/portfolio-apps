<template>
  <div class="social">
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/kone-mamoudou-116a3820b/" target="_blank">
                <i class="fab fa-linkedin-in icon"></i>
            </a>
        </li>
        <li>
            <a href="https://github.com/tontonkone" target="_blank">
                <i class="fab fa-github icon"></i>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.icon {
    font-size: 2rem;
    margin: .5rem;
    color: var(--color-bg-btn);

    &:hover{
        transform: scale(1.2);
        color: var(--color-hover-bg);
    }
}

ul{
    padding: 0;
    display: flex;
    li{
        list-style: none;
    }
}

@media only screen and (max-width: 758px){
    .icon{
        font-size: 1.5rem;
    }
}
</style>