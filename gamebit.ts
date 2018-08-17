/**
 * The pins used by ELECFREAKS game:bit
 */
//%
enum GameBitPin {
    //% block="C"
    P12 = <number>DAL.MICROBIT_ID_IO_P12,
    //% block="D"
    P13 = DAL.MICROBIT_ID_IO_P13,
    //% block="E"
    P14 = DAL.MICROBIT_ID_IO_P14,
    //% block="F"
    P15 = DAL.MICROBIT_ID_IO_P15,
}

/**
 * The event raised by the ELECFREAKS game:bit pins
 */
//%
enum GameBitEvent {
    //% block="down"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="up"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions to operate the ELECFREAKS game:bit
 */
//% color=#0fbc11 icon="\uf11b"
namespace gamebit {
	/**
	 * 
	 */
    //% shim=gamebit::init
    function init(): void {
        return;
    }

	/**
	 * Determines if a button is pressed
	 * @param button the pin that acts as a button
	 */
    //% weight=89
    //% blockId=gamebit_ispressed block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function isPressed(button: GameBitPin): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>button) == 0;
    }

	/**
	 * Registers code to run when a game:bit event is detected.
	 */
    //% weight=90
    //% blockId=gamebit_onevent block="on button %button|%event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: GameBitPin, event: GameBitEvent, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler); // register handler
    }
}
