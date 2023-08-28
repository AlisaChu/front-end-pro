export function clearFormData (formElements) {
  for (const input of formElements) {
    if (input.type === 'text') {
      input.value = ''
    }
  }
}