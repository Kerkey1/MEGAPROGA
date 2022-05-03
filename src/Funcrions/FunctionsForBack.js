const RomToString = function (rom) {
    let str = "";
    let i = 0;
    for (; i < rom.length - 1; i++) {
        str += rom[i].Raw() + ',';
    }
    str += rom[i].Raw();
    return str;
}

export const Exec = async function (curent_state, rom, cmd_index, tact_count) {
    let response = await fetch('cgi-bin/K1804', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/text;charset=utf-8'
        },
        body: curent_state.ToString() + '\n' + RomToString(rom) + '\n' + cmd_index + ',' + tact_count
    });
    let returned_states_raw = await response.json();
    console.log(returned_states_raw)
    return returned_states_raw
}




