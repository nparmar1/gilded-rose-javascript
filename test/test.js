const { it } = require('@jest/globals');
const { update_quality, items, Item } = require('../src/gilded_rose');

describe("Gilded Rose", function() {

    it('Regular items decrease by 1 for sell_in and quality', () => {
        const item = [new Item('+5 Dexterity Vest', 10, 20)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(9);
        expect(item[0].quality).toEqual(19);
      });

    it('Regular items decrease by 2 for quality once the sell_in day is less than 0', () => {
        const item = [new Item('Testing item', 0, 20)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(-1);
        expect(item[0].quality).toEqual(18);
    });
    
    it('The quality of an item is never below 0', () => {
        const item = [new Item('Testing item', 10, 0)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(9);
        expect(item[0].quality).toEqual(0);
    });
  
  });