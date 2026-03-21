<template>
    <div class="breadcrumbs-container">
        <nav class="breadcrumbs">
            <ul>
                <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path">
                    <router-link :to="breadcrumb.path" class="breadcrumb">
                        {{ breadcrumb.meta.breadcrumb }}
                    </router-link>
                    <span v-if="index < breadcrumbs.length - 1">
                        /
                    </span>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const breadcrumbs = computed(() => {
    return route.matched.filter(record => record.meta && record.meta.breadcrumb);
})
</script>
<style lang="scss">
</style>