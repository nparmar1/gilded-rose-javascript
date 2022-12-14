function Item(name, sell_in, quality) {
	this.name = name;
	this.sell_in = sell_in;
	this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

class Update_quality {
	regularItems(item) {
		item.sell_in--;
		item.quality--;

		if (item.sell_in < 0) item.quality--;
		if (item.quality < 0) item.quality = 0;
	}

	agedBrie(item) {
		item.sell_in--;

		if (item.quality < 50) item.quality++;
		else item.quality = item.quality;
	}

	sulfuras(item) {}

	backstagePasses(item) {
		item.sell_in--;

		if (item.sell_in < 0) item.quality = 0;
		else if (item.sell_in <= 5) item.quality += 3;
		else if (item.sell_in <= 10) item.quality += 2;
		else if (item.sell_in > 10) item.quality += 1;

		if (item.quality > 50) item.quality = 50;
	}

	conjuredManaCake(item) {
		item.sell_in--;
		item.quality -= 2;

		if (item.sell_in < 0) item.quality -= 2;
		if (item.quality < 0) item.quality = 0;
	}
}

const update = new Update_quality();

const update_quality = (items) => {
	items.forEach((item) => {
		if (item.name === 'Aged Brie') update.agedBrie(item);
		else if (item.name === 'Sulfuras, Hand of Ragnaros') update.sulfuras(item);
		else if (item.name === 'Backstage passes to a TAFKAL80ETC concert')
			update.backstagePasses(item);
		else if (item.name === 'Conjured Mana Cake') update.conjuredManaCake(item);
		else update.regularItems(item);
	});
};

module.exports = { update_quality, items, Item };
