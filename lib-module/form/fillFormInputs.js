export function fillFormInputs (inputs, data) {
  for (const input of inputs) {
    if (data?.[input.id]) {
      input.value = data[input.id]
    }
  }
}