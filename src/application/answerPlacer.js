import { getTextFromClipBoard } from '../services/clipboard'
import { questionToKey } from '../domain/questionAnswer'

export async function getKeyFromClipBoardText() {
  const clipBoardText = await getTextFromClipBoard()
  const clipTextToKeyAnswer = questionToKey(clipBoardText)
  return clipTextToKeyAnswer
}
