import { BasicType, AdvancedType } from 'sendbix-base';

export function isButtonBlock(blockType: any) {
  return blockType === BasicType.BUTTON || blockType === AdvancedType.BUTTON;
}