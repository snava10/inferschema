import { Schema, FieldType } from "src/index";

export let airlineSchema: Schema = {
  fields: [
    {
      name: "airline",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "avail_seat_km_per_week",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "incidents_85_99",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "fatal_accidents_85_99",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "fatalities_85_99",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "incidents_00_14",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "fatal_accidents_00_14",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "fatalities_00_14",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
  ],
  errors: null,
};

export let propertySchema: Schema = {
  fields: [
    {
      name: "Id",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "price",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "transferDate",
      type: FieldType.DATE,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "postcode",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "propertyType",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "oldOrNew",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "duration",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "paon",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "saon",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "street",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "locality",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "city",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "district",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "county",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "ppdCategoryType",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "recordStatus",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
  ],
  errors: null,
};

export let titanicSchema: Schema = {
  fields: [
    {
      name: "pclass",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "survived",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "name",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "sex",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "age",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "sibsp",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "parch",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "ticket",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "fare",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "cabin",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "embarked",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "boat",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "body",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "home.dest",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
  ],
  errors: null,
};

export let variedTypesSchema: Schema = {
  fields: [
    {
      name: "string column",
      type: FieldType.STRING,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "number column",
      type: FieldType.NUMBER,
      format: FieldType.ANY,
      missingValues: [],
    },
    {
      name: "date column",
      type: FieldType.DATE,
      format: FieldType.ANY,
      missingValues: [],
    },
  ],
  errors: null,
};
