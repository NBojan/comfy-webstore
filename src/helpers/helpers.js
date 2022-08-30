export const formatPrice = (value) => {
    const newNumber = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value / 100)

    return newNumber
}

export const uniqueValues = (data, property) => {
    let tmpArray = data.map(item => item[property]);
    if(property === "colors") tmpArray = tmpArray.flat()
    return ["all", ...new Set(tmpArray)]
}