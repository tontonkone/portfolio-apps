<template>
  <div class="social">
    <ul>
        <li>
            <a href="https://www.linkedin.com/feed/" target="_blank">
                <i class="fab fa-linkedin-in icon"></i>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/feed/" target="_blank">
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
    li{
        display:inline-block;
        list-style: none;
    }
}
</style>