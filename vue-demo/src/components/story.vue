<template>
<div v-html="content" class="box">

</div>
</template>

<script>

export default {
    data() {
        return {
            content:'',
        }
    },
    created() {
        this.id=this.$route.params.id;
        this.getContent();
    },
    methods: {
        async getContent(){
             const data=await this.$.axios.get(`/news/${this.$route.params.id}`);
             this.content=data.body;
        }
    },
}
</script>

<style scoped>
.box{
    max-width: 790px;
    margin: 0 auto;
    vertical-align: bottom;
}
</style>