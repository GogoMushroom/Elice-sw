const test = [1, 2, 3, 4];

// Map 함수 구현 로직
if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        var T, A, k;
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this); // 기존 array
        var len = O.length >>> 0; // 비트연산
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        A = new Array(len);
        k = 0;

        while (k < len) {
            var kValue, mappedValue; // kValue : 기존 배열 요소값, mappedVavlue : 새로운 배열 요소값
            if (k in O) {
                // 객체O 안에 속성의 이름이나 배열의 인덱스를 뜻하는 문자열 또는 수 값 K가 존재하는지 반환
                // in : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O); // 함수에 재할당 (this값, 요소값, 요소idx, 배열)

                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}

// filter 함수 구현 로직
if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        "use strict";
        if (!((typeof func === "Function" || typeof func === "function") && this))
            throw new TypeError();

        var len = this.length >>> 0,
            res = new Array(len), // preallocate array
            t = this,
            c = 0,
            i = -1;
        if (thisArg === undefined) {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func(t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        } else {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }

        res.length = c; // shrink down array to proper size
        return res;
    };
}

// reduce 함수 구현 로직
if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, "reduce", {
        value: function (callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError(
                    "Array.prototype.reduce " + "called on null or undefined"
                );
            }
            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
            }

            var o = Object(this);
            var len = o.length >>> 0;
            var k = 0;
            var value;

            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in o)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError(
                        "Reduce of empty array " + "with no initial value"
                    );
                }
                value = o[k++];
            }

            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }

                k++;
            }

            return value;
        },
    });
}
