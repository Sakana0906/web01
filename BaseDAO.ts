import Database from "better-sqlite3";

export abstract class BaseDAO {
    protected db: Database.Database;

    constructor (dbpath: string = 'user_system.db') {
        this.db = new Database(dbpath);
        this.iniTable();
    }

    protected abstract iniTable(): void;
}