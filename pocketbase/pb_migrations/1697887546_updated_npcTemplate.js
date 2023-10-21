/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ml4dfoao",
    "name": "actions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ctitudqwj7c9mpt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  // remove
  collection.schema.removeField("ml4dfoao")

  return dao.saveCollection(collection)
})
