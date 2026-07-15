let year: number = 0;
let bonus: number = 0;

for (let i: number = 0 ; i < 20 ; i++) {
    bonus+= 5000;
    year++;
    console.log(`ปีที่ ${year}: โบนัส = ${bonus} บาท`)
}

console.log(`ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้รับโบนัส ${bonus} บาท`)