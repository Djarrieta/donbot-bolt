import Binance from "binance-api-node";

interface Params {
  minAmountToTradeUSDT: number;
}

export class ExchangeService {
  private exchange: ReturnType<typeof Binance>;

  constructor(private readonly apiKey: string, private readonly apiSecret: string) {
    this.exchange = Binance({
      apiKey: this.apiKey,
      apiSecret: this.apiSecret,
    });
  }

  public async executeTrade(symbol: string, quantity: number): Promise<boolean> {
    console.log(`Executing trade: ${quantity} shares of ${symbol}`);
    
    try {
      // Implement actual trade execution using Binance API
      // This is a placeholder and should be replaced with actual API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Trade executed successfully');
      return true;
    } catch (error) {
      console.error('Trade execution failed:', error);
      return false;
    }
  }

  public async getCurrentPrice(symbol: string): Promise<number> {
    try {
      const ticker = await this.exchange.prices({ symbol });
      return parseFloat(ticker[symbol]);
    } catch (error) {
      console.error('Error fetching current price:', error);
      return 0;
    }
  }

  public async getPairList(params: Params): Promise<string[]> {
    const pairList: string[] = [];
    try {
      const { symbols: unformattedList } = await this.exchange.futuresExchangeInfo();
      const prices = await this.exchange.futuresMarkPrice();
      for (const symbol of unformattedList) {
        const {
          symbol: pair,
          status,
          quoteAsset,
          baseAsset,
          contractType,
          filters,
        }: any = symbol;

        const minQty = Number(
          filters.find((f: any) => f.filterType === "LOT_SIZE").minQty
        );
        const minNotional = Number(
          filters.find((f: any) => f.filterType === "MIN_NOTIONAL").notional
        );
        const currentPrice =
          Number(prices.find((p: any) => p.symbol === pair)?.markPrice) || 0;
        const minQuantityUSD = minQty * currentPrice;

        if (
          status !== "TRADING" ||
          quoteAsset !== "USDT" ||
          baseAsset === "USDT" ||
          contractType !== "PERPETUAL" ||
          minQuantityUSD > params.minAmountToTradeUSDT ||
          minNotional > params.minAmountToTradeUSDT
        ) {
          continue;
        }
        pairList.push(pair);
      }
    } catch (error) {
      console.error('Error fetching pair list:', error);
    }
    return pairList;
  }
}