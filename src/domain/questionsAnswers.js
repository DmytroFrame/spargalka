export const findAnswerByKey = (data, key) => {
  const [_, answer] = Object.entries(data)
    .filter((arr) => arr[0].includes(key))
    .flat()

  return answer
}
