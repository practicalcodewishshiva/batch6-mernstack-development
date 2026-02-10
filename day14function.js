const productName = "Cult";
const ProductPrice = 635;
const productName2 = "US Polo";
const ProductPrice2 = 2975;

const totalMrp = 1199;
const discountOnMRP = 564;
const couponDiscount = 50;
const platFormFee = 23;
const quantity = 2;

function getName(
  totalMrp,
  discountOnMRP,
  couponDiscount,
  platFormFee,
  quantity,
) {
  const totalPrice = totalMrp - discountOnMRP;
  const platfee = platFormFee - couponDiscount;

  const totalMrpPrice = totalPrice;
  return totalMrpPrice * quantity + platfee;
}

console.log(
  getName(totalMrp, discountOnMRP, couponDiscount, platFormFee, quantity),
);

// additin substraction deiviosn mutiplication


