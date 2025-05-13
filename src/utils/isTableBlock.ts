import { BasicType, AdvancedType } from 'sendbix-base';

export function isTableBlock(blockType: any) {
  return blockType === AdvancedType.TABLE;
}
