import { up } from './migrations/20240708_create_users_table';

async function migrate() {
  await up();
  process.exit();
}

migrate();
