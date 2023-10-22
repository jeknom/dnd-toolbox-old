/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pwubfgpclbapkk")

  collection.name = "combatantTemplate"

  // remove
  collection.schema.removeField("gvp8wjbt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifpgrpue",
    "name": "ac",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmfbmiw6",
    "name": "hp",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iu6qzymq",
    "name": "str",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sz4jnxlh",
    "name": "int",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2umqduvh",
    "name": "wis",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwrzqpyy",
    "name": "cha",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cokxu8y4",
    "name": "con",
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

  collection.name = "npcTemplate"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvp8wjbt",
    "name": "dex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifpgrpue",
    "name": "ac",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmfbmiw6",
    "name": "hp",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iu6qzymq",
    "name": "str",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sz4jnxlh",
    "name": "int",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2umqduvh",
    "name": "wis",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwrzqpyy",
    "name": "cha",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cokxu8y4",
    "name": "con",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
