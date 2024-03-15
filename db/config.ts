import { defineDb, defineTable, column } from 'astro:db';

const users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    email: column.text({ unique: true }),
    password: column.text(),
  },
});

const posts = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    authorId: column.text({ references: () => users.columns.id }),
  },
});

export default defineDb({
  tables: {
    users,
    posts,
  }
});
