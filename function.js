
const pressGrindBeans = () => {
  console.log("Grinding for 20 seconds");
}
pressGrindBeans();


//Activity

const favColor = () => {
  console.log("My favourite color is Blue");
}
favColor();


const cashWithdrawal = (amount,accum) => {
  console.log(`withthdrawing${amount} from account ${accum}`);
  }
  cashWithdrawal(300,50449921);

  const addUP = (num1,num2) => {
    return num1 + num2;
  }
  console.log(addUP(2,5));

  //Example
  const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
  };
  const getFahreneit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
  };
  console.log("The temperature is" + getFahreneit(15)+ "F");