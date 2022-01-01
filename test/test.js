const { it } = require('@jest/globals');
const { update_quality, items, Item } = require('../src/gilded_rose');

describe("Gilded Rose", function() {

    it('Regular items decrease by 1 for sell_in and quality', () => {
        const item = [new Item('+5 Dexterity Vest', 10, 20)];
        update_quality(item);
        expect(item[0].sell_in).toEqual();
        expect(item[0].quality).toEqual();
      });
  
  });