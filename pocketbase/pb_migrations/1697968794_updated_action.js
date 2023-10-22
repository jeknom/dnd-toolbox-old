/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctitudqwj7c9mpt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhdgv9ae",
    "name": "hitDice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qdur04ju",
    "name": "damageDice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctitudqwj7c9mpt")

  // remove
  collection.schema.removeField("lhdgv9ae")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qdur04ju",
    "name": "diceNotation",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
