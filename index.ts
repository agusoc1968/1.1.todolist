class Item {
  constructor(public id: number, public name: string) {}
}

class CRUD {
  private items: Item[] = [];
  private nextId: number = 1;

  create(name: string): Item {
    const newItem = new Item(this.nextId++, name);
    this.items.push(newItem);
    return newItem;
  }

  read(id?: number): Item[] | Item | undefined {
    if (id) {
      return this.items.find((item) => item.id === id);
    } else {
      return this.items;
    }
  }

  update(id: number, newName: string): Item | undefined {
    const itemToUpdate = this.items.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.name = newName;
      return itemToUpdate;
    } else {
      return undefined;
    }
  }

  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

// Ejemplo de uso
const crud = new CRUD();

const newItem = crud.create("Item 1");
console.log("Item creado:", newItem);

const allItems = crud.read();
console.log("Todos los items:", allItems);

const updatedItem = crud.update(newItem.id, "Item 1 Actualizado");
console.log("Item actualizado:", updatedItem);

const deleted = crud.delete(newItem.id);
console.log("Item eliminado:", deleted);

const remainingItems = crud.read();
console.log("Items restantes:", remainingItems);