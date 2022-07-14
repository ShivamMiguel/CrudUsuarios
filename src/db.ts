import { Pool } from 'pg';

const connectionString = 'postgres://vclvphlw:IObHuOQ7JPE6wpKVEXLEItv4z8WISP_5@kesavan.db.elephantsql.com/vclvphlw';
const db = new Pool({connectionString});
export default db;