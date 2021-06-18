const SHA256 = require("crypto-js/sha256");


// Klasse Block
class Block{
    // Konstruktor + Parameter
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){   // für Debuggin-Zwecke, Inhalt des Objektes
        return ` Block -
            Timestamp:  ${this.timestamp}
            Last Hash:  ${this.lastHash.substring(0,10)}
            Hash:       ${this.hash.substring(0,10)}
            Data:       ${this.data}
            `;
    }

    static genesis(){  // 1. Block
        return new this("Genesis time", "-------","xyz1234",[]);
    }

    // 2. Block etc.
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp,lastHash,data);

        return new this(timestamp,lastHash,hash,data);
        }
    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}  // EoC

module.exports = Block;  // Export als Modul