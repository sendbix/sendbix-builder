import { BasicType, AdvancedType } from 'sendbix-base';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
}