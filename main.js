const cities = ["Ciudad de México", "Caracas", "Bogotá", "Lima", "Buenos aires"]

const randomStrings = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

module.exports = randomStrings