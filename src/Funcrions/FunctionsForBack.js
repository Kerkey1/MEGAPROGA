const RomToString = function (rom) {
    let str = "";
    let i = 0;
    for (; i < rom.length - 1; i++) {
        str += rom[i].Raw() + ',';
    }
    str += rom[i].Raw();
    return str;
}

const GetCgiScriptForPlatform = function(){
    const names = {
        Windows: "win_K1804",
        Linux: "linux_K1804"
    }
    for (let key of Object.keys(names)){
        if(navigator.userAgent.includes(key)){
            return names[key];
        }
    }
    throw "Undefined platform"
}

export const Exec = async function (curent_state, rom, cmd_index, tact_count) {
    let response = await fetch('cgi-bin/'+GetCgiScriptForPlatform(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/text;charset=utf-8'
        },
        body: curent_state.ToString() + '\n' + RomToString(rom) + '\n' + cmd_index + ',' + tact_count
    });
    let returned_states_raw = await response.json();
    console.log(returned_states_raw)

    if(returned_states_raw.status === null){
        return returned_states_raw.result
    }
    else{
        return alert(returned_states_raw.status)
    }

}




