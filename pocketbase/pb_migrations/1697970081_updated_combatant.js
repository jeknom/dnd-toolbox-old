/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qs1rvksb",
    "name": "isPlayer",
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
  collection.schema.removeField("qs1rvksb")

  return dao.saveCollection(collection)
})
