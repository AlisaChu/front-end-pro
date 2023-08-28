export function fillFormData (formElements, data) {
  for (const input of formElements) {
    if (
      ['text', 'hidden'].includes(input.type)
      && data?.[input.id]
    ) {
      input.value = data[input.id]
    }
  }
}