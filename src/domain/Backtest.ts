import { ExchangeService } from '../infrastructure/ExchangeService';
import { DatabaseService } from '../infrastructure/DatabaseService';

export class Backtest {
  constructor(
    private readonly symbol: string,
    private readonly exchangeService: ExchangeService,
    private readonly databaseService: DatabaseService
  ) {}

  public async excecute(): Promise<void> {
    console.log(`Running backtest for ${this.symbol}`);
    // Backtest logic will be implemented here
  }

  public async prepare(): Promise<void> {
    console.log(`Preparing backtest for ${this.symbol}`);
    // Preparation logic will be implemented here
  }

  public async forwardTest(): Promise<void> {
    console.log(`Running forward test for ${this.symbol}`);
    // Forward testing logic will be implemented here
  }
}