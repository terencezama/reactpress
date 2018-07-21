import validator from 'validator'

const isRequired = value => (value ? undefined : 'Required')

const isNumeric = value => (value && !validator.isNumeric(value.toString()) ? 'Invalid number' : undefined)

const isDecimal = value => (value && !validator.isDecimal(value.toString(), { locale: 'en-ZA' })
  ? 'Must contain decimal points'
  : undefined)

const isDecimal2 = value => (value && !validator.isDecimal(value.toString(), {
  force_decimal: true,
  decimal_digits: '2',
  locale: 'en-ZA'
})
  ? 'Must contain 2 decimal points'
  : undefined)

const isAlpha = value => (value && !validator.isAlpha(value.toString())
  ? 'Must only contain letters (a-zA-Z)'
  : undefined)

const isAlphanumeric = value => (value && !validator.isAlphanumeric(value.toString())
  ? 'Must only contain letters and numbers'
  : undefined)

const isBoolean = value => (value && !validator.isBoolean(value.toString())
  ? 'Invalid boolean'
  : undefined)

const isCreditCard = value => (value && !validator.isCreditCard(value.toString())
  ? 'Invalid card number'
  : undefined)

const isURL = value => (value && !validator.isURL(value.toString()) ? 'Invalid URL' : undefined)

const isEmail = value => (value && !validator.isEmail(value.toString()) ? 'Invalid email' : undefined)

const isMobilePhone = (prefix, locale) => value => (value && !validator.isMobilePhone(prefix + value.toString().replace(/\s/g, ''), [locale])
  ? 'Invalid number'
  : undefined)
const isMobilePhoneZa = isMobilePhone('27', 'en-ZA')
const isMaxLength = max => value => (value && !validator.isLength(value.toString(), { min: 0, max })
  ? `Must be ${max} characters or less`
  : undefined)
const isMaxLength3 = isMaxLength(3)
const isMaxLength4 = isMaxLength(4)
const isMaxLength6 = isMaxLength(6)
const isMaxLength160 = isMaxLength(160)

const isMinLength = min => value => (value && !validator.isLength(value.toString(), { min, max: undefined })
  ? `Must be ${min} characters or more`
  : undefined)
const isMinLength3 = isMinLength(3)
const isMinLength4 = isMinLength(4)
const isMinLength6 = isMinLength(6)

export default {
  isRequired,
  isNumeric,
  isDecimal,
  isDecimal2,
  isAlpha,
  isAlphanumeric,
  isBoolean,
  isCreditCard,
  isURL,
  isEmail,
  isMobilePhoneZa,
  isMaxLength3,
  isMaxLength4,
  isMaxLength6,
  isMaxLength160,
  isMinLength3,
  isMinLength4,
  isMinLength6
}
