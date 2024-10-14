import { BacktestConfig } from '../types/BacktestConfig';

export const backtestConfig: BacktestConfig = {
  lookBackLength: 100,
  slArray: [0.5, 1, 1.5, 2],
  tpArray: [1, 1.5, 2, 2.5],
  maxTradeLengthArray: [60, 120, 240, 480]
};