/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l99cosr1",
    "name": "isHostile",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv")

  // remove
  collection.schema.removeField("l99cosr1")

  return dao.saveCollection(collection)
})
