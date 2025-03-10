function distanceFromHqInBlocks(num){
    return Math.abs(num - 42)
}


function distanceFromHqInFeet(num){
    const newNum = Math.abs(num - 42)
    return newNum * 264
}


function distanceTravelledInFeet(num1, num2){
    return Math.abs((num1 - num2))* 264
}


function calculatesFarePrice(start, destination){
    const distance = Math.abs((start - destination))* 264
    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02
    } else if (distance >= 2000 && distance <= 2500){
        return 25
    } else if (distance > 2500){
        return 'cannot travel that far'
    }
}

/*
  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});
*/