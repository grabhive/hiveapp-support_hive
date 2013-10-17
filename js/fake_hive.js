var bitcoin = bitcoin || (function() {
    var transactions = [];
    var userAddress = 'poqjer23rfc234laq';

    return {
        BTC_IN_SATOSHI: 100000000,
        MBTC_IN_SATOSHI: 100000,
        UBTC_IN_SATOSHI: 100,

        TX_TYPE_INCOMING: 'incoming',
        TX_TYPE_OUTGOING: 'outgoing',

        sendMoney: function(hash, amount, callback) {
            if (!hash) {
                throw "hash argument is undefined";
            }

            var result = prompt("Send bitcoins to " + hash + ":", amount);

            if (callback) {
                if (result) {
                    var txid = transactions.length + "";

                    transactions.push({
                        id: txid,
                        amount: result,
                        type: 'outgoing',
                        timestamp: new Date().toISOString(),
                        inputAddresses: [userAddress],
                        outputAddresses: [hash]
                    });

                    callback(true, txid);
                } else {
                    callback(false);
                }
            }
        },

        getTransaction: function(id, callback) {
            if (!callback) {
                throw "callback argument is undefined";
            }

            callback(transactions[id]);
        },

        getSystemInfo: function(callback){
            if (!callback) {
                throw "callback argument is undefined";
            }

            callback({ decimalSeparator: "," });
        },

        getUserInfo: function(callback){
            if (!callback) {
                throw "callback argument is required";
            }

            callback({
                firstName: 'Homer',
                lastName:  'Simpson',
                email:     'homer@fake.com',
                address:   userAddress
            });
        }
    };
})();
