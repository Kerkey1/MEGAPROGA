export default function Registers(arr) {
    this.PSW = 0;
    this.FLG = 0;
    this.BI = 0;
    this.BO = 0;
    this.ZI = 0;
    this.RK = 0;
    this.ZO = 0;
    this.CMK = 0;
    this.RDI = 0;
    this.RDO = 0;
    this.MAR = 0;
    this.SP = 0;
    this.ST = new Int16Array(3);
    this.RQ = 0;
    this.R = new Int16Array(16);
    this.CT = 0;
    this.ToString = function () {
        return "" +
            this.PSW + ',' + this.FLG + ',' + this.BI + ',' + this.BO + ',' + this.ZI + ',' + this.RK + ',' + this.ZO + ',' + this.CMK + ',' +
            this.RDI + ',' + this.RDO + ',' + this.MAR + ',' + this.SP + ',' + this.ST[0] + ',' + this.ST[1] + ',' + this.ST[2] + ',' + this.RQ + ',' +
            this.R[0] + ',' + this.R[1] + ',' + this.R[2] + ',' + this.R[3] + ',' + this.R[4] + ',' + this.R[5] + ',' +
            this.R[6] + ',' + this.R[7] + ',' + this.R[8] + ',' + this.R[9] + ',' + this.R[10] + ',' + this.R[11] + ',' + this.R[12] + ',' +
            this.R[13] + ',' + this.R[14] + ',' + this.R[15] + ',' + this.CT;
    }
    if (arr) {
        this.PSW = arr[0];
        this.FLG = arr[1];
        this.BI = arr[2];
        this.BO = arr[3];
        this.ZI = arr[4];
        this.RK = arr[5];
        this.ZO = arr[6];
        this.CMK = arr[7];
        this.RDI = arr[8];
        this.RDO = arr[9];
        this.MAR = arr[10];
        this.SP = arr[11];
        this.ST[0] = arr[12];
        this.ST[1] = arr[13];
        this.ST[2] = arr[14];
        this.RQ = arr[15];
        for (let i = 0; i < 16; i++) {
            this.R[i] = arr[16 + i];
        }
        this.CT = arr[32];
    }
}