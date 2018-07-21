const cardNumber = (value) => {
    if (!value) return ''
    const numbers = value.replace(/[^\d]/g, '')
  
    if (numbers.length <= 4) return numbers
    if (numbers.length <= 8) return `${numbers.slice(0, 4)} ${numbers.slice(4)}`
    if (numbers.length <= 12) return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8)}`
  
    return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)} ${numbers.slice(12)}`
  }
  
  const cardExpiry = (value, previousValue) => {
    if (!value) return ''
    const numbers = value.replace(/[^\d]/g, '')
    const minYear = new Date().getFullYear().toString().slice(-2)
  
    // Check if typing forward
    if (!previousValue || value.length > previousValue.length) {
      // Make sure first number of month is not greater 1
      if (numbers.length === 1 && numbers > 1) return ''
      // Make sure month is not greater 12
      if (numbers.length === 2 && (numbers > 12 || numbers < 1)) return numbers.slice(0, 1)
      // Make sure first number of year is not less than minYear
      if (numbers.length === 3 && numbers.slice(2, 3) < minYear.slice(0, 1)) return `${numbers.slice(0, 2)}/`
      // Make sure year is not less than minYear
      if (numbers.length === 4 && numbers.slice(2, 4) < minYear) return `${numbers.slice(0, 2)}/${numbers.slice(2, 3)}`
    } else if (value.length < previousValue.length) {
      return ''
    }
  
    if (numbers.length < 3) return numbers
  
    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
  }
  
  const date = (value, previousValue) => {
    if (!value) return ''
    const numbers = value.replace(/[^\d]/g, '')
  
    // Check if typing forward
    if (!previousValue || value.length > previousValue.length) {
      if (numbers.length === 5 && numbers.slice(4, 5) > 1) return `${numbers.slice(0, 4)}`
      if (numbers.length === 6 && (numbers.slice(4, 6) > 12 || numbers.slice(4, 6) < 1)) return `${numbers.slice(0, 4)}-${numbers.slice(4, 5)}`
      if (numbers.length === 7 && numbers.slice(6, 7) > 3) return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}`
      if (numbers.length === 8 && numbers.slice(6, 8) > 31) return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 7)}`
    } else if (value.length < previousValue.length) {
      return ''
    }
  
    if (numbers.length < 5) return numbers
    if (numbers.length < 7) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`
  
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6)}`
  }
  
  const mobile = (value) => {
    if (!value) return ''
    const numbers = value.replace(/[^\d]/g, '')
  
    if (numbers.length === 1 && numbers < 1) return ''
    if (numbers.length <= 3) return numbers
    
  
    return `${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4)}`
  }
  
  const number = (value) => {
    if (!value) return ''
    return value.replace(/[^\d]/g, '')
  }
  
  export default {
    cardExpiry,
    cardNumber,
    date,
    mobile,
    number
  }
  