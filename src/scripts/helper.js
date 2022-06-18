class Helper {
  static oneLinize(string) {
    return string.replace(/(\r\n|\n|\r)/gm, ' ').trim()
  }

  static capitalize(string) {
    return string
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }
}

export default Helper
