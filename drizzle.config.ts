import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzy/schema.ts",
    out: "./src/drizzy/",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
