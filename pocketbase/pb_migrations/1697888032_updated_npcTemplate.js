/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4habd25v",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // remove
  collection.schema.removeField("4habd25v")

  return dao.saveCollection(collection)
})
