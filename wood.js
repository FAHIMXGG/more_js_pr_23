function woodCalculator(chairQ, tableQ, bedQ) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQ * perChairWood;
    const tableWood = tableQ * perTableWood;
    const bedWood = bedQ * perBedWood;

    console.log(chairWood, tableWood, bedWood);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 0, 5);
console.log('total wood req', totalWood);