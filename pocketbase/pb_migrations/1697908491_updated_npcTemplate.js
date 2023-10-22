/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvp8wjbt",
    "name": "dex",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // remove
  collection.schema.removeField("gvp8wjbt")

  return dao.saveCollection(collection)
})
