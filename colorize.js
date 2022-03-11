
// Print colored text to a terminal or (chromium) browser console with a simple syntax
// (Inspired by Minecraft color codes: https://minecraft.fandom.com/wiki/Formatting_codes#Color_codes)

// colorize('§cHello') — Returns red text saying "Hello"
// console.colorize('§9World') — Prints "World" to the console in blue.

console.colorize = msg => console.log( colorize(msg) )
const colorize = (msg, prefix = '§') => {
    const colors = { 
        'a':'92', // Green
        'b':'96', // Aqua
        'c':'91', // Red
        'd':'95', // Light purple
        'e':'93', // Yellow
        'f':'37', // White

        '0':'30', // Black
        '1':'34', // Dark blue
        '2':'32', // Dark green
        '3':'36', // Dark aqua
        '4':'31', // Dark red
        '5':'35', // Dark purple
        '6':'33', // Gold
        '7':'90', // Gray
        '8':'90', // Dark gray
        '9':'94', // Blue

        'r':'0', // Reset
        'l':'1', // Bold
        'n':'4', // Underline
        'i':'7', // Inverse
    }

    msg += prefix + 'r'; // Reset markup at end of message
    for (let i in colors)
        msg = msg.replaceAll(prefix + i, `[${colors[i]}m`) // https://stackoverflow.com/a/38617204
    return msg;
}
