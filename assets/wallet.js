function _0x1228() {
    const _0x37d0ba = ['conversion_rates', 'currencyInfo', 'currencySelectOptions', 'replace', 'fromWei', 'getElementById', '29924xlezjx', 'then', 'NGN', '5RKADoz', 'utils', '1852360wIHOjH', 'selectedCurrency', 'eth_requestAccounts', 'open', 'classList', 'remove', 'EUR', 'Ошибка\x20при\x20обновлении\x20баланса', 'ethToRub', 'Ошибка\x20при\x20подключении\x20к\x20кошельку', 'ZAR', 'Ошибка\x20подключения\x20к\x20кошельку:', 'ethereum', 'KSh', '4637270VQvANi', 'click', 'error', 'toFixed', 'wallet\x20not\x20connected', 'forEach', '1262178coNpbZ', 'ethToUsd', 'https://v6.exchangerate-api.com/v6/58dc3def9033dec59baf1b26/latest/USD', 'USD', 'usdToKes', 'innerText', 'cny', 'undefined', '199084IrthBw', 'usdToGhs', 'RUB', 'data-value', 'ETH', 'rub', 'GHS', 'json', '1789533OCtJAe', 'ether', 'currencySelectContainer', 'addEventListener', '18WiweTn', '421127TvtvyC', '.custom-select-option', 'CNY', 'KES', 'eth', 'Ошибка\x20при\x20получении\x20курсов\x20валют:', '2NHwGPR', 'querySelectorAll', 'usd', 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,rub,eur,cny'];
    _0x1228 = function() {
        return _0x37d0ba;
    };
    return _0x1228();
}

function _0x5a8c(_0x1fb443, _0x41d46d) {
    const _0x1228e8 = _0x1228();
    return _0x5a8c = function(_0x5a8c4c, _0x49b830) {
        _0x5a8c4c = _0x5a8c4c - 0xc6;
        let _0x5aba1f = _0x1228e8[_0x5a8c4c];
        return _0x5aba1f;
    }, _0x5a8c(_0x1fb443, _0x41d46d);
}
const _0x5c5d5c = _0x5a8c;
(function(_0x3cd91a, _0x54fa07) {
    const _0x25ca78 = _0x5a8c,
        _0x5dfe23 = _0x3cd91a();
    while (!![]) {
        try {
            const _0x99ff0c = parseInt(_0x25ca78(0xe4)) / 0x1 * (-parseInt(_0x25ca78(0xf7)) / 0x2) + parseInt(_0x25ca78(0xf0)) / 0x3 * (parseInt(_0x25ca78(0x101)) / 0x4) + -parseInt(_0x25ca78(0xc6)) / 0x5 * (parseInt(_0x25ca78(0xdc)) / 0x6) + parseInt(_0x25ca78(0xf1)) / 0x7 + -parseInt(_0x25ca78(0xc8)) / 0x8 + parseInt(_0x25ca78(0xec)) / 0x9 + parseInt(_0x25ca78(0xd6)) / 0xa;
            if (_0x99ff0c === _0x54fa07) break;
            else _0x5dfe23['push'](_0x5dfe23['shift']());
        } catch (_0x4c5218) {
            _0x5dfe23['push'](_0x5dfe23['shift']());
        }
    }
}(_0x1228, 0x1ee9b));
if (typeof window[_0x5c5d5c(0xd4)] === _0x5c5d5c(0xe3)) document['getElementById'](_0x5c5d5c(0xfc))['innerText'] = _0x5c5d5c(0xda);
else {
    const updateBalances = async () => {
        const _0x1cacf4 = _0x5c5d5c;
        try {
            const _0x8b5a8b = new Web3(window[_0x1cacf4(0xd4)]),
                _0x45ed9b = await _0x8b5a8b[_0x1cacf4(0xf5)]['getAccounts'](),
                _0x2f4886 = _0x45ed9b[0x0];
            if (!_0x2f4886) {
                document[_0x1cacf4(0x100)](_0x1cacf4(0xfc))[_0x1cacf4(0xe1)] = _0x1cacf4(0xda);
                return;
            }
            const _0x2402c0 = await _0x8b5a8b[_0x1cacf4(0xf5)]['getBalance'](_0x2f4886),
                _0x2cbc51 = parseFloat(_0x8b5a8b[_0x1cacf4(0xc7)][_0x1cacf4(0xff)](_0x2402c0, _0x1cacf4(0xed)));
            if (isNaN(_0x2cbc51)) {
                document[_0x1cacf4(0x100)](_0x1cacf4(0xfc))[_0x1cacf4(0xe1)] = 'Ошибка:\x20неверный\x20баланс';
                return;
            }
            const _0x4fe308 = await getExchangeRates(),
                _0x26b477 = _0x2cbc51 * _0x4fe308[_0x1cacf4(0xd0)],
                _0x1c19ce = _0x2cbc51 * _0x4fe308[_0x1cacf4(0xdd)],
                _0x126e05 = _0x2cbc51 * _0x4fe308['ethToEur'],
                _0x148717 = _0x2cbc51 * _0x4fe308['ethToCny'],
                _0x2ce9bc = _0x1c19ce * _0x4fe308[_0x1cacf4(0xe5)],
                _0x4909cf = _0x1c19ce * _0x4fe308['usdToNgn'],
                _0x1b8955 = _0x1c19ce * _0x4fe308[_0x1cacf4(0xe0)],
                _0x43a8c0 = _0x1c19ce * _0x4fe308['usdToZar'],
                _0x2f1392 = _0x2df55b => {
                    const _0x3cddfd = _0x1cacf4;
                    return _0x2df55b[_0x3cddfd(0xd9)](0x2)[_0x3cddfd(0xfe)](/\B(?=(\d{3})+(?!\d))/g, '\x20');
                },
                _0x396119 = {
                    'ETH': _0x2cbc51,
                    'RUB': _0x26b477,
                    'USD': _0x1c19ce,
                    'EUR': _0x126e05,
                    'CNY': _0x148717,
                    'GHS': _0x2ce9bc,
                    'NGN': _0x4909cf,
                    'KES': _0x1b8955,
                    'ZAR': _0x43a8c0
                };
            updateSelectedCurrency(_0x2cbc51, _0x4fe308, _0x396119, _0x2f1392);
        } catch (_0x533bc1) {
            console[_0x1cacf4(0xd8)](_0x533bc1), document[_0x1cacf4(0x100)](_0x1cacf4(0xfc))[_0x1cacf4(0xe1)] = _0x1cacf4(0xcf);
        }
    };
    async function getExchangeRates() {
        const _0xc404e4 = _0x5c5d5c;
        try {
            const _0x3be05e = await fetch(_0xc404e4(0xde)),
                _0x40cdb3 = await _0x3be05e['json'](),
                _0x47f9b1 = _0x40cdb3[_0xc404e4(0xfb)][_0xc404e4(0xea)],
                _0x2634c7 = _0x40cdb3[_0xc404e4(0xfb)]['NGN'],
                _0x36fce8 = _0x40cdb3[_0xc404e4(0xfb)][_0xc404e4(0xf4)],
                _0x289fed = _0x40cdb3['conversion_rates']['ZAR'],
                _0x49d9cc = await fetch(_0xc404e4(0xfa)),
                _0x4ada3b = await _0x49d9cc[_0xc404e4(0xeb)]();
            return {
                'ethToUsd': _0x4ada3b[_0xc404e4(0xd4)][_0xc404e4(0xf9)] || 0x0,
                'ethToRub': _0x4ada3b['ethereum'][_0xc404e4(0xe9)] || 0x0,
                'ethToEur': _0x4ada3b[_0xc404e4(0xd4)]['eur'] || 0x0,
                'ethToCny': _0x4ada3b[_0xc404e4(0xd4)][_0xc404e4(0xe2)] || 0x0,
                'usdToGhs': _0x47f9b1 || 0x0,
                'usdToNgn': _0x2634c7 || 0x0,
                'usdToKes': _0x36fce8 || 0x0,
                'usdToZar': _0x289fed || 0x0
            };
        } catch (_0x3b9e1f) {
            return console[_0xc404e4(0xd8)](_0xc404e4(0xf6), _0x3b9e1f), {
                'ethToUsd': 0x0,
                'ethToRub': 0x0,
                'ethToEur': 0x0,
                'ethToCny': 0x0,
                'usdToGhs': 0x0,
                'usdToNgn': 0x0,
                'usdToKes': 0x0,
                'usdToZar': 0x0
            };
        }
    }
    const updateSelectedCurrency = (_0x5dc864, _0x506ac7, _0x406d6c, _0x582b9f) => {
            const _0x127d7c = _0x5c5d5c,
                _0x5abf00 = document['getElementById'](_0x127d7c(0xc9))[_0x127d7c(0xe1)];
            let _0x20a766;
            switch (_0x5abf00) {
                case _0x127d7c(0xe8):
                    _0x20a766 = _0x406d6c['ETH'];
                    break;
                case _0x127d7c(0xe6):
                    _0x20a766 = _0x406d6c[_0x127d7c(0xe6)];
                    break;
                case _0x127d7c(0xdf):
                    _0x20a766 = _0x406d6c[_0x127d7c(0xdf)];
                    break;
                case _0x127d7c(0xce):
                    _0x20a766 = _0x406d6c[_0x127d7c(0xce)];
                    break;
                case _0x127d7c(0xf3):
                    _0x20a766 = _0x406d6c['CNY'];
                    break;
                case _0x127d7c(0xea):
                    _0x20a766 = _0x406d6c[_0x127d7c(0xea)];
                    break;
                case _0x127d7c(0x103):
                    _0x20a766 = _0x406d6c['NGN'];
                    break;
                case _0x127d7c(0xf4):
                    _0x20a766 = _0x406d6c[_0x127d7c(0xf4)];
                    break;
                case 'ZAR':
                    _0x20a766 = _0x406d6c[_0x127d7c(0xd2)];
                    break;
                default:
                    _0x20a766 = _0x406d6c[_0x127d7c(0xe8)];
            }
            const _0x449bc4 = _0x582b9f(_0x20a766),
                _0x137441 = {
                    'ETH': 'Ξ',
                    'RUB': '₽',
                    'USD': '$',
                    'EUR': '€',
                    'CNY': '¥',
                    'GHS': '₵',
                    'NGN': '₦',
                    'KES': _0x127d7c(0xd5),
                    'ZAR': 'R'
                },
                _0x133ad3 = _0x137441[_0x5abf00] || '';
            document[_0x127d7c(0x100)](_0x127d7c(0xfc))[_0x127d7c(0xe1)] = '\x20' + _0x449bc4 + '\x20' + _0x133ad3;
        },
        currencySelectContainer = document[_0x5c5d5c(0x100)](_0x5c5d5c(0xee)),
        currencySelectOptions = document['getElementById'](_0x5c5d5c(0xfd)),
        selectedCurrency = document[_0x5c5d5c(0x100)]('selectedCurrency');
    currencySelectContainer[_0x5c5d5c(0xef)](_0x5c5d5c(0xd7), () => {
        const _0x415f2a = _0x5c5d5c;
        currencySelectContainer[_0x415f2a(0xcc)]['toggle'](_0x415f2a(0xcb));
    });
    const options = document[_0x5c5d5c(0xf8)](_0x5c5d5c(0xf2));
    options[_0x5c5d5c(0xdb)](_0x1a6256 => {
        const _0x454662 = _0x5c5d5c;
        _0x1a6256[_0x454662(0xef)]('click', _0x327ac8 => {
            const _0x1290cf = _0x454662,
                _0x4b73cf = _0x327ac8['target']['getAttribute'](_0x1290cf(0xe7));
            selectedCurrency[_0x1290cf(0xe1)] = _0x4b73cf, currencySelectContainer[_0x1290cf(0xcc)][_0x1290cf(0xcd)](_0x1290cf(0xcb)), updateBalances();
        });
    }), window['ethereum']['request']({
        'method': _0x5c5d5c(0xca)
    })[_0x5c5d5c(0x102)](() => {
        updateBalances();
    })['catch'](_0x119cfb => {
        const _0x3fc355 = _0x5c5d5c;
        console['error'](_0x3fc355(0xd3), _0x119cfb), document[_0x3fc355(0x100)](_0x3fc355(0xfc))[_0x3fc355(0xe1)] = _0x3fc355(0xd1);
    });
}
