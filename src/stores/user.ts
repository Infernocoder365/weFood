import { defineStore } from 'pinia';
import { MyAPI } from '@/services/api'; // Adjust the import path as necessary

// Define the UserInfo interface
interface UserInfo {
    username: string;
    tel:string; 
    score: number;
    balance: number;
    freeze_balance: number;
    invite_code: string;
    daily_earnings: number;
    earnings_history: number;
    order_num:number;
    ratio:number;
    level_pic:string;
}

export const useUserStore = defineStore('user', {
    state: () => ({
        vipList: [],
        cashLog: [],
        financialLog: [],
        userInfo: {} as UserInfo, // Initialize userInfo with the UserInfo type
    }),
    actions: {
        async fetchVipList() {
            try {
                const response = await MyAPI.vipList();
                this.vipList = response.data.list; // Assuming response is the correct format
            } catch (error) {
                alert(error);
                console.error('Failed to fetch VIP list:', error);
            }
        },
        async fetchFinancialLog(page: number = 1) {
            try {
                const response = await MyAPI.FinancialLog(page);
                this.financialLog = response.data.records.data; // Assuming response is the correct format
            } catch (error) {
                alert(error)
            }
        },
        async fetchCashLog(page: number = 1) {
            try {
                const response = await MyAPI.cashlog(page);
                this.cashLog = response.data.data; // Assuming response is the correct format
            } catch (error) {
                console.error('Failed to fetch cash log:', error);
            }
        },
        async changePassword(oldPassword: string, newPassword: string) {
            try {
                await MyAPI.changePwd(oldPassword, newPassword);
                // Handle success (e.g., show a message or update state)
            } catch (error) {
                console.error('Failed to change password:', error);
            }
        },
        async changePayPassword(oldPassword: string, newPassword: string) {
            try {
                await MyAPI.changePayPwd(oldPassword, newPassword);
                // Handle success
            } catch (error) {
                console.error('Failed to change pay password:', error);
            }
        },
        async fetchIndex() {
            try {
                const response = await MyAPI.index();
                // Handle index response as needed
                this.userInfo = response.data as UserInfo; // Cast response data to UserInfo
            } catch (error) {
                console.error('Failed to fetch index:', error);
            }
        },
    },
});
