import { TradeConfig } from '../types/TradeConfig';
import { Interval } from '../types/Interval';

export const tradeConfig: TradeConfig = {
  sl: 1.5, // Stop loss percentage
  tp: 2.0, // Take profit percentage
  maxTradeLength: 240, // Maximum trade duration in minutes
  leverage: 10, // Leverage multiplier
  maxOpenPositions: 3, // Maximum number of open positions
  interval: Interval["15m"], // Candlestick interval
  lookBackLength: 100, // Number of candles to look back
  fee: 0.075, // Trading fee percentage
  riskPt: 1, // Risk percentage per trade
  minAmountToTrade: 10 // Minimum amount to trade in USDT
};