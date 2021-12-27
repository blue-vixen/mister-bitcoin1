import { storageService } from "./storageService";
import axios from "axios";

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    if (!storageService.load('btc')) {
        const btcRate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        storageService.store('btc', btcRate.data)

    }
    return storageService.load('btc')
}

async function getMarketPrice() {
    if (!storageService.load('marketPrice')) {
        const marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        storageService.store('marketPrice', marketPrice.data)
    }
    return storageService.load('marketPrice')
}

async function getConfirmedTransactions() {
    if (!storageService.load('confirmedTransactions')) {
        const transactions = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true')
        storageService.store('confirmedTransactions', transactions.data)
    }
    return storageService.load('confirmedTransactions')
}

