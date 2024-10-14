import { ExchangeService } from './infrastructure/ExchangeService';
import { DatabaseService } from './infrastructure/DatabaseService';

const apiKey = 'your-api-key-here';
const apiSecret = 'your-api-secret-here';
const exchangeService = new ExchangeService(apiKey, apiSecret);
const databaseService = new DatabaseService();

async function prepareBacktest() {
  await databaseService.connect();

  console.log('Preparing backtest data...');

  // Fetch available trading pairs
  const pairList = await exchangeService.getPairList({ minAmountToTradeUSDT: 10 });
  console.log('Available trading pairs:', pairList);

  // For each pair, fetch historical data and store it in the database
  for (const pair of pairList) {
    console.log(`Fetching historical data for ${pair}...`);
    // TODO: Implement fetching historical data from the exchange
    // const historicalData = await exchangeService.getHistoricalData(pair);
    // await databaseService.storeHistoricalData(pair, historicalData);
  }

  console.log('Backtest data preparation completed.');
}

prepareBacktest().catch(console.error);