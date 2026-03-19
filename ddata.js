const quizScores = [88, 95, 76, 100, 92];
let totalScore = 0;
for(let i=0;i<quizScores.length;i++)
{
    totalScore += quizScores[i];
} 
const averageScore = totalScore / quizScores.length;

console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);



