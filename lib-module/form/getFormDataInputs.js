export function getFormDataInputs (inputs) {
  const data = {}

  for (const input of inputs) {
    data[input.id] = input.value
  }

  console.log(data)

  return data
}