function getFormData (formElements) {
  const data = {}

  for (const input of formElements) {
    if (input.type === 'text') {
      data[input.id] = input.value
    }
  }

  return data
}
