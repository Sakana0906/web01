let stocks: number[] = [10, 2, 12, 8, 5];
function getRestockList(inventory:number[]) {
    const restockList: number[] = [];
    for(let i:number = 0 ; i < inventory.length ; i++){
        if (inventory[i] < 10){
            restockList.push(inventory[i]);
        }
    }
    return restockList;
}

console.log(`สินค้าที่ต้องสั่งเพิ่ม : ${getRestockList(stocks)}`);