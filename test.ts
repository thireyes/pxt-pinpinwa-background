// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
pinpinwa.background.schedule(
    () => {
        basic.showNumber(1)
    }, pinpinwa.background.Thread.Priority,
    pinpinwa.background.Mode.Repeat,
    5000
);

pinpinwa.background.schedule(
    () => {
        basic.showNumber(2)
    },
    pinpinwa.background.Thread.Priority,
    pinpinwa.background.Mode.Once,
    1000
);

const cancelId = pinpinwa.background.schedule(
    () => {
        basic.showNumber(3)
    },
    pinpinwa.background.Thread.UserCallback,
    pinpinwa.background.Mode.Repeat,
    10000
);

pinpinwa.background.remove(pinpinwa.background.Thread.UserCallback, cancelId);

