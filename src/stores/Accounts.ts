import { defineStore } from 'pinia'

interface User{
    name: string,
    role: string,
    points: number
}

export const useAccountStore = defineStore('account', {
    state: () => {
        return {account: null as User|null}
    },
    
    actions: {
        setUser (user: User) {
            this.account = user;
        },

        logout () {
            this.account = null;
        },

        check () {
            return this.account !== null;
        }
    }
})