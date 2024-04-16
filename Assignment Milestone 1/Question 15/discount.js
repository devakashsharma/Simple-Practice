const discountPercentage = (orignalPrice, discountedPrice) => {
    const discountAmount = orignalPrice - discountedPrice;
    const discountAmountPercentage = (discountAmount / orignalPrice) * 100;
    const roundedDiscountPercentage = Math.round(discountAmountPercentage * 100) / 100;

    return roundedDiscountPercentage;
}

const originalPrice = 100;
const discountPrice = 70;
const discountedPercent = discountPercentage(originalPrice, discountPrice);
console.log(`Discounted Percentage: ${discountedPercent}`);