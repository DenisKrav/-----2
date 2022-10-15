function part1()
{
var countBattery = prompt("Введіть кількість батарей:");

if(Number(countBattery) && Number(countBattery) > 0 && Number(countBattery) % 1 == 0)
{
    countBattery = Number(countBattery);
}
else
{
    alert("Недійсні вхідні дані");
    return;
}

var procDefectBat = prompt("Введіть відсоток несправних батарей:");
if(Number(procDefectBat) && Number(procDefectBat) > 0 && Number(procDefectBat) < 100)
{
    procDefectBat = Number(procDefectBat).toFixed(2);
}
else
{
    alert("Недійсні вхідні дані");
    return;
}

var countBedBat = (countBattery * procDefectBat) / 100;
var countGoodBat = countBattery - countBedBat;

alert(
"Кількість батарей: " + countBattery + "\n" +
"Процент несправних батарей: " + procDefectBat + "%\n" +
"Кількість несправних батарей: " + countBedBat.toFixed(2) + "\n" +
"Кількість робочих батарей: " + countGoodBat.toFixed(2));
}

function part2()
{
    var word = prompt("Введіть слово:");

    var count = 0;
    for(var i = 0; i < word.length; i++)
    {
        if(word[i] == " ")
        {
            count++
        }
    }

    if(word == "" || count == word.length)
    {
        alert("Неприпустиме значення");
        return;
    }

    if(word.length % 2 == 0)
    {
        alert(word[(word.length / 2) - 1] + word[word.length / 2]);
    }
    else
    {
        alert(word[Math.floor(word.length / 2)]);
    }
}
