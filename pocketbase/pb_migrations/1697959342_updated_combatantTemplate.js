/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpnuyguz",
    "name": "dex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // remove
  collection.schema.removeField("rpnuyguz")

  return dao.saveCollection(collection)
})
