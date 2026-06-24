let scores: number[] = [85, 92, 78, 90, 88];
let std_Data: [number, string] =[684245059, "David Martinez"];
let TotalScore: number = 0;

console.log(`Scores: ${scores}`);
console.log(`Student ID: ${std_Data[0]}, Name: ${std_Data[1]}`);
for (let i = 0; i < scores.length; i++) {
    console.log(`Test: ${i + 1} score: ${scores[i]}`);
    TotalScore += scores[i];
}
console.log(`Total Score: ${TotalScore}`);
console.log(`Average Score: ${TotalScore / scores.length}`);