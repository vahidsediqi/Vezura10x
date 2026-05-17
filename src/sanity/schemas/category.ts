import { defineField, defineType } from "sanity";

export const categorySchema = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Purple (SEO)", value: "purple" },
          { title: "Cyan (Google Ads)", value: "cyan" },
          { title: "Orange (Merchant)", value: "orange" },
          { title: "Green (Shopify)", value: "green" },
          { title: "Pink (General)", value: "pink" },
        ],
      },
    }),
  ],
});
