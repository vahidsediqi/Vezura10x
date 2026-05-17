import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "vezura10x",
  title: "Vezura10x Blog",

  projectId: "vezura10x",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("📝 Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
            S.listItem()
              .title("🏷️ Categories")
              .child(S.documentTypeList("category").title("Categories")),
            S.listItem()
              .title("👤 Authors")
              .child(S.documentTypeList("author").title("Authors")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
