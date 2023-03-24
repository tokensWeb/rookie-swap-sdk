import JSBI from 'jsbi'

import {ChainId, SolidityType} from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly chainId: number
  public readonly decimals: number
  public readonly symbol: string
  public readonly name?: string

  public readonly isNative?: boolean

  /**
   * The only instance of the base class `Currency`.
   */

  // public static readonly ETHER: Currency = new Currency(ChainId.BSC,18, 'BNB', 'BNB')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(chainId: number, decimals: number, symbol: string, name?: string, isNative?: boolean) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)
    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.isNative = isNative
  }
}

export const ETHNative: {[chainId: number] : Currency}  = {
  [ChainId.ETHEREUM]: {
    chainId: ChainId.ETHEREUM,
    decimals: 18,
    symbol: "ETH",
    name: "ETH",
    isNative: true
  },
  [ChainId.RINKEBY]: {
    chainId: ChainId.RINKEBY,
    decimals: 18,
    symbol: "ETH",
    name: "ETH",
    isNative: true
  },
  [ChainId.GOERLI]: {
    chainId: ChainId.GOERLI,
    decimals: 18,
    symbol: "ETH",
    name: "ETH",
    isNative: true
  },
  [ChainId.BSC]: {
    chainId: ChainId.BSC,
    decimals: 18,
    symbol: "BNB",
    name: "BNB",
    isNative: true
  },
  [ChainId.BSC_TESTNET]: {
    chainId: ChainId.BSC_TESTNET,
    decimals: 18,
    symbol: "TBNB",
    name: "TBNB",
    isNative: true
  }
};
