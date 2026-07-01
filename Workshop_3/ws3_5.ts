enum Role {
    Admin,
    Editor,
    Viewer
}

interface User {
    Username: string;
    Email: string;
    role: Role;
}

const user: User[] = [
    { Username: "john_doe", Email: "john.doe@example.com", role: Role.Editor },
    { Username: "jane_smith", Email: "jane.smith@example.com", role: Role.Viewer },
    { Username: "admin_ceo", Email: "admin.ceo@example.com", role: Role.Admin }
];

function checkAccess(user: User): void {
    if (user.role === Role.Admin) {
        console.log(`${user.Username} has full access.`);
    } else if (user.role === Role.Editor) {
        console.log(`${user.Username} can edit content.`);
    } else if (user.role === Role.Viewer) {
        console.log(`${user.Username} can only view content.`);
    }
}

for (const u of user) {
    checkAccess(u);
}
