const valid = (message, isValid) => message ? (isValid ? null : message) : isValid

export const isEmail = (value, message) => valid(message, /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value))
export const isNumber = (value, message) => valid(message, /^\d+$/.test(value))
export const required = (value, message) => valid(message, !!value && value.trim() !== '')
export const min = (value, min, message) => valid(message, value.length >= min)
export const max = (value, max, message) => valid(message, value.length <= max)

export const REQUIRED = 'REQUIRED'
export const MIN = 'MIN'
export const MAX = 'MAX'
export const IS_EMAIL = 'IS_EMAIL'
export const IS_NUMBER = 'IS_NUMBER'

export const validator = (values, fields) => {
  let errors = {}

  fields.forEach((field) => field.rules.forEach((rule) => {
    if (!errors[field.name]) {
      let value = values[field.name]

      switch (rule.type) {
        case REQUIRED:
          errors[field.name] = required(value, (rule.message || 'Required'))
          break

        case IS_EMAIL:
          errors[field.name] = isEmail(value, (rule.message || 'Invalid email address'))
          break

        case IS_NUMBER:
          errors[field.name] = isNumber(value, (rule.message || 'Invalid number'))
          break

        case MIN:
          errors[field.name] = min(value, rule.params, (rule.message || 'Number < ' + rule.params))
          break

        case MAX:
          errors[field.name] = max(value, rule.params, (rule.message || 'Number > ' + rule.params))
          break

        default:
          break
      }
    }
  }))

  return errors
}

export default validator
