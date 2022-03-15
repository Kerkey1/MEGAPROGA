const FieldOffsets = new BigInt64Array([48n, 46n, 42n, 38n, 33n, 28n, 26n, 24n, 21n, 18n, 15n, 12n, 10n, 8n, 0n]);
const FieldMasks = new Int16Array([0xFFFF, 0b11, 0b1111, 0b1111, 0b11111, 0b11111, 0b11, 0b11, 0b111, 0b111, 0b111, 0b111, 0b11, 0b11, 0xFF]);

const GetM = function (cmd, count) {
    return Number(((BigInt(cmd) >> FieldOffsets[count - 1])) & BigInt(FieldMasks[count - 1]));
}

const MakeM = function (val, count) {
    return (BigInt((val) & FieldMasks[count - 1]) << FieldOffsets[count - 1]);
}

const EInvMaskM2 = {
    NNOT: 0,
    NOT: 1,
    NNOT_MASK: 2,
    NOT_MASK: 3,
};

const ECondM3 = {
    PSW0: 0,
    PSW1: 1,
    PSW2: 2,
    PSW3: 3,
    PSW4: 4,
    PSW5: 5,
    CT: 6,
    CONSTZ: 7,
    FLG0: 8,
    FLG1: 9,
    FLG2: 10,
    FLG3: 11,
    FLG4: 12,
    FLG5: 13,
    FLG6: 14,
    FLG7: 15,

    /*Óðîâüíü 1*/
    LV1: 8,
    /*Óðîâüíü 2.1*/
    LV21: 9,
    /*Óðîâüíü 2.2*/
    LV22: 10,
    /*Óðîâüíü 3*/
    LV3: 11,
    /*Óðîâüíü 4*/
    LV4: 12,
    /*Óðîâüíü 5*/
    LV5: 13,
    /*RK[11/9] == 0*/
    RK119: 15,
    /*RK[5/3] == 0*/
    RK53: 15,
};

const EJumpM4 = {
    JZ: 0,
    CJS: 1,
    JMAP: 2,
    CJP: 3,
    PUSH: 4,
    JSRP: 5,
    CJV: 6,
    JRP: 7,
    RFCT: 8,
    RPCT: 9,
    CRTN: 10,
    CJPP: 11,
    LDCT: 12,
    LOOP: 13,
    CONT: 14,
    JP: 15,
};

const ECarryM8 = {
    _0: 0,
    _1: 1,
    CARRY_TO_PSW: 2,
    NCARRY_TO_PSW: 3
};

const EOperandsM9 = {
    AQ: 0,
    AB: 1,
    ZQ: 2,
    ZB: 3,
    ZA: 4,
    DA: 5,
    DQ: 6,
    DZ: 7
};

const EFuncM10 = {
    ADD: 0,
    SUBS: 1,
    SUBR: 2,
    OR: 3,
    AND: 4,
    NRAND: 5,
    XOR: 6,
    NRXOR: 7
};

const EResultM11 = {
    FQ: 0,
    NOP: 1,
    FBA: 2,
    FBF: 3,
    RSH_FBQ: 4,
    RSH_FB: 5,
    LSH_BFQ: 6,
    LSH_BF: 7
};

const EInputM12 = {
    RDID: 0,
    ZID: 1,
    M1D: 2,
    PSWD: 3,
    RDID_BIRDI: 4,
    ZID_BIRDI: 5,
    M1D_BIRDI: 6,
    RDID_BIRDI_BIRK: 7
};

const EPswM13 = {
    SAVE: 0,
    LD_FROM_FLAGS: 1,
    LD_WITH_SHIFT: 2,
    LD_FROM_Y: 3
};

const EOutputM14 = {
    NONE: 0,
    YRDO: 1,
    YMAR: 2
};

export default function Command(arg1){
    this.fields = new Int16Array(15);
    this.SetFields = function (obj) {
        this.fields[0] = obj.m1;
        this.fields[1] = obj.m2;
        this.fields[2] = obj.m3;
        this.fields[3] = obj.m4;
        this.fields[4] = obj.m5;
        this.fields[5] = obj.m6;
        this.fields[6] = obj.m7;
        this.fields[7] = obj.m8;
        this.fields[8] = obj.m9;
        this.fields[9] = obj.m10;
        this.fields[10] = obj.m11;
        this.fields[11] = obj.m12;
        this.fields[12] = obj.m13;
        this.fields[13] = obj.m14;
        this.fields[14] = obj.m15;
    }

    if (typeof arg1 === 'number') {
        for (let i = 0; i < 15; i++) {
            this.fields[i] = GetM(arg1, i + 1);
        }
    } else if (typeof arg1 === 'object') {
        this.SetFields(arg1);
    }

    this.FieldsToString = function () {
        let str = "";
        let i = 0;
        for (; i < this.fields.length - 1; i++) {
            str += this.fields[i] + ',';
        }
        return str += this.fields[i];
    }
    this.Raw = function () {
        return BigInt(
            MakeM(this.fields[0], 1) | MakeM(this.fields[1], 2) | MakeM(this.fields[2], 3) | MakeM(this.fields[3], 4) |
            MakeM(this.fields[4], 5) | MakeM(this.fields[5], 6) | MakeM(this.fields[6], 7) | MakeM(this.fields[7], 8) |
            MakeM(this.fields[8], 9) | MakeM(this.fields[9], 10) | MakeM(this.fields[10], 11) | MakeM(this.fields[11], 12) |
            MakeM(this.fields[12], 13) | MakeM(this.fields[13], 14) | MakeM(this.fields[14], 15)
        );
    }
    this.Parse = function () {
        let M = this.fields;
        let str = "";
        let cmd_is_empty = true;
        for (let i in this.fields) {
            if (this.fields[i]) {
                cmd_is_empty = false;
                break;
            }
        }
        if (cmd_is_empty)
            return str;

        let D;
        switch (M[11]) {
            case EInputM12.M1D:
                str += "M1 -> D\n";
                D = "M1";
                break;
            case EInputM12.M1D_BIRDI:
                str += "M1 -> D; BI -> RDI\n";
                D = "M1";
                break;
            case EInputM12.PSWD:
                str += "PSW -> D\n";
                D = "PSW";
                break;
            case EInputM12.RDID:
                str += "RDI -> D\n";
                D = "RDI";
                break;
            case EInputM12.RDID_BIRDI:
                str += "RDI -> D; BI -> RDI\n";
                D = "RDI";
                break;
            case EInputM12.ZID:
                str += "ZI -> D";
                D = "ZI";
                break;
            case EInputM12.ZID_BIRDI:
                str += "ZI -> D; BI -> RDI";
                D = "ZI";
                break;
        }
        const GetOpAddr = function (i) {
            if (!(M[i]&0b10000)) {
                return M[i];
            } else if ((M[i]&0b10000) && !(M[i]&0b01000)) {
                return M[i] & 0b01111;
            } else if ((M[i]&0b10000) && (M[i]&0b01000)) {
                return M[i] & 0b00111;
            }
        }

        let operands = ["", ""];
        let A = GetOpAddr(4), B = GetOpAddr(5);
        switch (M[8]) {
            case EOperandsM9.AB:
                operands[0] = "R" + A;
                operands[1] = "R" + B;
                break;
            case EOperandsM9.AQ:
                operands[0] = "R" + A;
                operands[1] = "Q";
                break;
            case EOperandsM9.DA:
                operands[0] = "R" + A;
                operands[1] = D;
                break;
            case EOperandsM9.DQ:
                operands[0] = D;
                operands[1] = "Q";
                break;
            case EOperandsM9.DZ:
                operands[0] = D;
                operands[1] = "0";
                break;
            case EOperandsM9.ZA:
                operands[0] = "0";
                operands[1] = "R" + A;
                break;
            case EOperandsM9.ZB:
                operands[0] = "0";
                operands[1] = "R" + B;
                break;
            case EOperandsM9.ZQ:
                operands[0] = "0";
                operands[1] = "Q";
                break;

        }

        let func = "";
        switch (M[9]) {
            case EFuncM10.ADD:
                func = " + ";
                break;
            case EFuncM10.AND:
                func = " & ";
                break;
            case EFuncM10.NRAND:
                operands[0] = "!" + operands[0];
                func = " & ";
                break;
            case EFuncM10.NRXOR:
                operands[0] = "!" + operands[0];
                func = " ^ ";
                break;
            case EFuncM10.OR:
                func = " | ";
                break;
            case EFuncM10.SUBR:
                func = " - ";
                break;
            case EFuncM10.SUBS:
                const temp = operands[0];
                operands[0] = operands[1];
                operands[1] = temp;
                func = " - "
                break;
            case EFuncM10.XOR:
                func = " ^ ";
                break;
        }
        let operation = operands[0] + func + operands[1];
        switch (M[10]) {
            case EResultM11.NOP:
                str += operation + "\n";
                break;
            case EResultM11.FBA: case EResultM11.FBF:
                str += "R" + B + "<- " + operation + "\n";
                break;
            case EResultM11.FQ:
                str += "Q" + "<- " + operation + "\n";
                break;
            case EResultM11.LSH_BF:
                str += "R" + B + "<- " + "2*(" + operation + ")" + "\n";
                break;
            case EResultM11.LSH_BFQ:
                str += "R" + B + "<- " + "2*(" + operation + ")" + "; ";
                str += "Q" + "<- " + "2*(" + operation + ")" + "\n";
                break;
            case EResultM11.RSH_FB:
                str += "R" + B + "<- " + "(" + operation + ")\\2" + "\n";
                break;
            case EResultM11.RSH_FBQ:
                str += "R" + B + "<- " + "(" + operation + ")\\2" + "; ";
                str += "Q" + "<- " + "(" + operation + ")\\2" + "\n";
                break;
        }
        switch (M[12]) {
            case EPswM13.SAVE:
                str += "PSW <- PSW\n"
                break;
            case EPswM13.LD_FROM_FLAGS:
                str += "PSW <- C16,OVR,Z,F15\n"
                break;
            case EPswM13.LD_WITH_SHIFT:
                str += "PSW <- shift\n"
                break;
            case EPswM13.LD_FROM_Y:
                str += "PSW <- Y\n"
                break;
        }
        switch (M[13]) {
            case 0: case 3:
                str += "NOP\n"
                break;
            case EOutputM14.YRDO:
                str += "Y -> DRO\n";
                break;
            case EOutputM14.YMAR:
                str += "Y -> MAR\n";
                break;
        }
        const jump_strs = [
            "JZ", "CJS", "JMAP", "CJP", "PUSH", "JSRP", "CJV", "JRP",
            "RFCT", "RPCT", "CRTN", "CJPP", "LDCT", "LOOP", "CONT", "JP",
        ];
        const condition_strs = [
            ["PSW[0]", "PSW[0]"],["PSW[1]", "PSW[1]"],["PSW[2]", "PSW[2]"],["PSW[3]", "PSW[3]"],
            ["PSW[4]", "PSW[4]"],["PSW[5]", "PSW[5]"],["CT", "CT"],["CONST 0", "CONST 0"],
            ["FLG[0]", "Level 1"],["FLG[1]", "Level 2.1"],["FLG[2]", "Level 2.2"],["FLG[3]", "Level 3"],
            ["FLG[4]", "Level 4"],["FLG[5]", "Level 5"],["FLG[6]", "RK[11/9] == 0"],["FLG[7]", "RK[5/3] == 0"]
        ];
        const inversion = (M[1] == EInvMaskM2.NOT || M[1] == EInvMaskM2.NOT_MASK);
        const has_mask = (M[1] == EInvMaskM2.NNOT_MASK || M[1] == EInvMaskM2.NOT_MASK);

        str += jump_strs[M[3]] + "; TST = " + (inversion ? "NOT " : "")
            + condition_strs[M[2]][Number(has_mask)] + (has_mask ? "; MASKED\n" : "\n");

        str += "M1: " + M[0].toString(8) + "; M15: " + M[14].toString(8);

        return str;
    }
    this.ToJson = function () {
        //TODO
        const M = this.fields;
        let obj = {};
        obj.consts = {M1: M[0], M15: M[14]};
    }
}