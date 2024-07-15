//  problem 1
 
 function iPhone1(ASIN, color, display, camera) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        }
    };
}

const phone1 = iPhone1("B07PGL2N7J", "Black", "6.1-inch", "12MP");
console.log(phone1.dial());           // "tring.. tring..."
console.log(phone1.sendMessage());    // "Sending message..."
console.log(phone1.cameraClick());    // "Camera clicked"
console.log(phone1)


// problem 2

function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        bluetooth: bluetooth,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        },
        connectBluetooth: function() {
            return "Bluetooth connected successfully...";
        }
    };
}

const phone2 = iPhone2("B07PGL2N7J", "Black", "6.1-inch", "12MP", "5.0");
console.log(phone2.dial());                   // "tring.. tring..."
console.log(phone2.sendMessage());            // "Sending message..."
console.log(phone2.cameraClick());            // "Camera clicked"
console.log(phone2.connectBluetooth());       // "Bluetooth connected successfully..."
console.log(phone2)