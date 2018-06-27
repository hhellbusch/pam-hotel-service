"use strict";

module.exports = class Hotel
{
	constructor(location, name) {
		this.location = location;
		this.name = name;
		this.vacancy = true;
	}

	toString () {
		return `Name: ${this.name} | ${this.location} - vacancy? ${this.vacancy}`;
	}
}
