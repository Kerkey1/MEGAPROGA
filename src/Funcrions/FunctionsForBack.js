const RomToString = function (rom) {
    let str = "";
    let i = 0;
    for (; i < rom.length - 1; i++) {
        str += rom[i].Raw() + ',';
    }
    str += rom[i].Raw();
    return str;
}

const Exec = async function (curent_state, rom) {
    let response = await fetch('cgi-bin/K1804.exe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/text;charset=utf-8'
        },
        body: curent_state.ToString() + '\n' + RomToString(rom) + '\n'
    });
    let output = await response.text();
    console.log(output);
}


