class Notifications {
    send(message: string) {
        console.log(`Notification: ${message}`);
    }
}

class EmailNotification extends Notifications {
    send(message: string) {
        console.log(`Email notification: ${message}`);
    }
}

class SMSNotification extends Notifications {
    send(message: string) {
        console.log(`SMS notification: ${message}`);
    }
}

class PushNotification extends Notifications {
    send(message: string): void {
        console.log(`Push notification: ${message}`);
    }
}
 const messages: Notifications[] = [new EmailNotification(), new SMSNotification(), new PushNotification()];
 messages.forEach(m => m.send("Hello everyone!"));