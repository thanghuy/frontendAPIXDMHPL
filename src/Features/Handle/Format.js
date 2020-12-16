const Format = {
    FormatPrice : (number) => {
        var price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        return price
    }
}
export default Format;