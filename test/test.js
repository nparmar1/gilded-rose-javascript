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

    it('Aged Brie increases quality by 1 as sell_in decrease by 1', () => {
        const item = [new Item('Aged Brie', 2, 0)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(1);
        expect(item[0].quality).toEqual(1);
    });

    it('The quality of an item is never over 50', () => {
        const item = [new Item('Aged Brie', 2, 50)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(1);
        expect(item[0].quality).toEqual(50);
    });

    it('Sulfuras sell_in and quality are never affected', () => {
        const item = [new Item('Sulfuras, Hand of Ragnaros', 0, 80)];
        const updatedItem = update_quality(item);
        expect(updatedItem[0].sell_in).toEqual(0);
        expect(updatedItem[0].quality).toEqual(80);
    });
  
  });