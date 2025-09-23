// stores/wallet.js
import { defineStore } from 'pinia';
import { WalletAPI } from '@/services/api'; 

interface Wallet {
  address: string;
  utype: string; // Define the type for utype
  notes?: string; // Optional property
}

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    wallets: [] as any,
    loading: false,
    error: null,
  }),
  getters: {
    allWallets: (state) => state.wallets,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  actions: {
    async fetchWallets() {
      this.loading = true;
      try {
        const response = await WalletAPI.getWalletList();
        this.wallets = (response as any)?.data?.wallets || [];
      } catch (error) {
        this.error = (error as any).message;
      } finally {
        this.loading = false;
      }
    },

    async addWallet({ address, utype, notes }: Wallet) {
      this.loading = true;
      try {
        const response = await WalletAPI.addWallet(address, utype, notes);
        this.wallets.push((response as any)?.data);
      } catch (error) {
        this.error = (error as any).message;
      } finally {
        this.loading = false;
      }
    },

    async deleteWallet(walletId: string) {
      this.loading = true;
      try {
        await WalletAPI.deleteWallet(walletId);
        this.wallets = this.wallets.filter((wallet : any) => wallet.id !== walletId);
      } catch (error) {
        this.error = (error as any).message;
      } finally {
        this.loading = false;
      }
    },
  },
});
