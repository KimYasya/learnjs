"use strict"

// Почему 6.35.toFixed(1) == 6.3?

// из за погрешности вычисления, верно округлить до ближайшего целого (6,4) можно так:

Math.round(6.35 * 10) / 10;