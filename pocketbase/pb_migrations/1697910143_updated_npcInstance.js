/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv")

  // remove
  collection.schema.removeField("hn4ewce0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjxfdhvq",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hn4ewce0",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("zjxfdhvq")

  return dao.saveCollection(collection)
})
