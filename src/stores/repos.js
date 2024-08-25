import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReposStore = defineStore('reposStore', () => {
    const pinnedRepos = ref([]);

    const fetchPinnedRepos = async () => {
        const query = `
        {
            user(login: "Sn0wF1re") {
                pinnedItems(first: 10, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            url
                            description
                            stargazerCount
                        }
                    }
                }
            }
        }`;

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        pinnedRepos.value = data.data.user.pinnedItems.nodes;
    };

    return {
        pinnedRepos,
        fetchPinnedRepos
    };
});