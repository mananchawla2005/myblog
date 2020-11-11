<template>
<div class="post-container">
    <router-link v-for="page in pages" :to="page.path">
        <div class="post-card">
            <img class="article-image" :src="'/images/' + page.frontmatter.image" />
            <div class="page-detail">
                <div class="page-title">{{ page.title }}</div>
                <div class="page-description">{{ page.frontmatter.description }}</div>
                <div class="page-author">Author: {{ page.frontmatter.author }}</div>
            </div>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            pages: []
        }
    },
    mounted() {
        this.$site.pages.forEach(page => {
            if (page.frontmatter.type === 'article') {
                this.pages.push(page)
            }
        })
    }
}
</script>

<style scoped>
.post-container {
    display: grid;
    grid-template-columns: auto;
}

.post-card {
    width: auto;
    height: auto;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    display: grid;
    gap: 10px;
    grid-template-columns: 25% auto;
    align-items: center;
    transition: all 0.25s ease;
}

.post-card:hover {
    transform: scale(1.1, 1.1);
}

.article-image {
    height: 100%;
}

.page-detail {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.page-title {
    color: black;
    font-size: 25px;
    margin-bottom: 0.5rem;
    font-weight: bolder;
}

.page-description {
    color: rgb(85, 85, 85);
}

.page-author {
    margin-top: 0.5rem;
}
</style>
