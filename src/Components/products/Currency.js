const CURRENCY = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})

const Currency = (number) => {
    return CURRENCY.format(number);
}

export default Currency;