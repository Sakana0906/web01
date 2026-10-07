import { BaseDAO } from "./BaseDAO";
import { User } from "./User.ts";

export class UserDAO extends BaseDAO {
    protected iniTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            POINT INTEGER,
            isActive INTEGER
            )
        `);
    }

    addUser(user: User): boolean {
        const sql = `INSERT OR IGNORE INTO user(id, username, point, isActive)VALUES (?, ?, ?, ?)`;
        const result = this.db.prepare(sql).run(user.getid(), user.getusername(), user.getpoint(), 1);
        return result.changes > 0;
    }

    findUserByID(id: number): User | null {
        const sql = `SELECT * FROM user WHERE id = ?`
        const row = this.db.prepare(sql).get(id) as any;
        if (!row) {
            return null;
        } else {
            return new User(row.id, row.username, row.point, row.isActive === 1);
        }
    }

    deductPoint(id: number, amount: number): boolean {
        const userDAO = new UserDAO();
        const user = userDAO.findUserByID(id);

        if (!user) {
            console.log(`user not found`);
            return false;
        }

        if (!user.getisActive()) {
            console.log(`user is not active`);
            return false;
        }

        if (user.getpoint() < amount) {
            console.log(`Not enough point`);
            return false;
        }

        const transaction = this.db.transaction(() => {
            const updatesql = `UPDATE User SET point = point - ? WHERE id = ? `;
            const result = this.db.prepare(updatesql).run(amount, id);
            return result.changes > 0;
        });
        return transaction();
    }
}