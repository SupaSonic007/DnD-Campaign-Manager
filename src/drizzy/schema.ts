import { createId } from "@paralleldrive/cuid2";
import {
    pgTable,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").notNull().primaryKey().$defaultFn(() => createId()),
    username: text("username").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updated: timestamp("updated")
        .defaultNow()
        .$onUpdate(() => new Date()),
    password: text("password").notNull(),
});

export const character = pgTable("character", {
    id: text("id").notNull().primaryKey().$defaultFn(() => createId()),
    name: text("name").notNull(),
    owner: text("owner_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    url: text("url").notNull(),
});

export const campaign = pgTable("campaign", {
    id: text("id").notNull().primaryKey().$defaultFn(() => createId()),
    name: text("name").notNull(),
    owner: text("owner_id")
        .references(() => user.id, { onDelete: "cascade" })
        .notNull(),
    createdAt: timestamp("created").notNull().defaultNow(),
    lastModified: timestamp("last_modified")
        .defaultNow()
        .$onUpdate(() => new Date()),
});

export const campaignAuth = pgTable("campaign_auth", {
    id: text("id").notNull().primaryKey().$defaultFn(() => createId()),
    campaign: text("campaign_id").references(() => campaign.id, {
        onDelete: "cascade",
    }),
    user: text("user_id").references(() => user.id, { onDelete: "cascade" }),
});
