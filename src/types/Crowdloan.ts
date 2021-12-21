import {create} from './_registry'
import {AccountId32} from '@polkadot/types/interfaces'
import {Bytes, u128, u32} from '@polkadot/types'
import {SubstrateEvent} from '@subsquid/hydra-common'

export namespace Crowdloan {
  /**
   * Contributed to a crowd sale. `[who, fund_index, amount]`
   */
  export class ContributedEvent {
    constructor(private event: SubstrateEvent) {}

    get params(): [AccountId32, u32, u128] {
      return [create('AccountId32', this.event.params[0].value), create('u32', this.event.params[1].value), create('u128', this.event.params[2].value)]
    }
  }

  /**
   * A memo has been updated. `[who, fund_index, memo]`
   */
  export class MemoUpdatedEvent {
    constructor(private event: SubstrateEvent) {}

    get params(): [AccountId32, u32, Bytes] {
      return [create('AccountId32', this.event.params[0].value), create('u32', this.event.params[1].value), create('Bytes', this.event.params[2].value)]
    }
  }

}
