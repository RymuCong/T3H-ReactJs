const formatPriceToVND = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

export default formatPriceToVND;