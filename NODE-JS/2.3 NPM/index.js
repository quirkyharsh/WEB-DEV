var generatename = require('sillyname');
import {randomSuperhero} from 'superheroes';

var name = generatename();

console.log(`My name is ${name} and my superhero name is ${randomSuperhero()}}`);