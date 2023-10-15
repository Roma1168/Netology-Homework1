#!/usr/bin/env node

const yargs = reuire("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { _: commands, $0, ...restParams } = yargs(hideBin(process.argv)).argv;
const { d, date, m, month, y, year } = restParams;
const newDate = new Date();
const command = commands.toString();
let params;
let interval;

if (year || y) {
    interval = "year";
    params = year || y;
}

if (month || m) {
    interval = "month";
    params = month || m;
}

if (date || d) {
    period = "date";
    params = date || d;
}

const getResultCurrentCommand = (interval) => {
    const getDate = {
        year: () => newDate.getFullYear(),
        month: () => newDate.getMonth(),
        date: () => newDate.getDate(),
    };

    return getDate[interval]() || newDate;
};

const getCommandAdd = (interval, add) => {
    const getDate = {
        year: () => newDate.getFullYear() + add,
        month: () => newDate.getmonth() + add,
        date: () => newDate.getDate() + add,
    };

    return getDate[interval]() || newDate;
};

const getCommandSub = (interval, sub) => {
    const getDate = {
        year: () => newDate.getFullYear() - sub,
        month: () => newDate.getMonth() - sub,
        date: () => newDate.getDate() - sub,
    };

    return getDate[interval]() || newDate;
};

if (command === "current") {
    const resDate = getResultCurrentCommand(interval);
    console.log(resDate);
}

if (command === "add") {
    const resDate = getCommandAdd (interval, params);
    console.log(resDate);
}

if (command === "sub") {
    const resDate = getCommandSub(interval, params);
    console.log(resDate);
}




