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
        update_quality(item);
        expect(item[0].sell_in).toEqual(0);
        expect(item[0].quality).toEqual(80);
    });
  
    it('Backstage passes quality increases by 1 as sell_in is greater than 10', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(14);
        expect(item[0].quality).toEqual(21);
    });

    it('Backstage passes quality increases by 2 when sell_in equals 10', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(9);
        expect(item[0].quality).toEqual(17);
    });

    it('Backstage passes quality increases by 2 when sell_in is less than 10', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(8);
        expect(item[0].quality).toEqual(17);
    });

    it('Backstage passes quality increases by 3 when sell_in equals 5', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(4);
        expect(item[0].quality).toEqual(18);
    });

    it('Backstage passes quality increases by 3 when sell_in is less than 5', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 4, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(3);
        expect(item[0].quality).toEqual(18);
    });

    it('Backstage passes quality drops to 0 when sell_in equals to 0', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(-1);
        expect(item[0].quality).toEqual(0);
    });

    it('Backstage passes quality is never over 50', () => {
        const item = [new Item('Backstage passes to a TAFKAL80ETC concert', 8, 50)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(7);
        expect(item[0].quality).toEqual(50);
      })

      it('Conjured Mana Cake quality decreases by 2 if the sell_in value decreases by 1', () => {
        const item = [new Item('Conjured Mana Cake', 8, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual(7);
        expect(item[0].quality).toEqual(13);
      })

      it('Conjured Mana Cake quality decreases by 4 if the sell_in value is less than by 0', () => {
        const item = [new Item('Conjured Mana Cake', 0, 15)];
        update_quality(item);
        expect(item[0].sell_in).toEqual();
        expect(item[0].quality).toEqual();
      })
      

  });