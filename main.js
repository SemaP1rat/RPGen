// peidoras program
document.getElementById('random').addEventListener('click', randomNickname)


let Nickname = ['William', 'Jacob', 'Joshua', 'James', 'John', 'Christopher', 'Michael', 'Austin', 'Andrew', 'Matthew', 'Ethan', 'Tyler', 'Joseph', 'Dylan', 'Benjamin', 'Alexander', 'Andrew', 'Nicholas', 'Anthony', 'Ryan', 'Liam', 'Samuel', 'Oliver', 'Logan', 'Daniel', 'Lincoln', 'Abraham', 'Adam', 'Albert', 'Alex', 'Alfred', 'Arthur', 'Aster', 'August', 'Ben', 'Bill', 'Billy', 'Bob', 'Brandon', 'Brendan', 'Cameron']
let Familiya = ['Aaron', 'Abbey', 'Abrahamson', 'Abrahams', 'Ackerman', 'Adamson', 'Archer', 'Armstrong', 'Augustine', 'Barber', 'Beckham', 'Chamberlain', 'Chadwick', 'Chester', 'Clark', 'Coleman', 'Collingwood', 'Cornett', 'Crawford', 'Davidson', 'Denman', 'Ellington', 'Ellsworth', 'Erickson', 'Fairclough', 'Farran', 'Fiddler', 'Ford', 'Gabrielson', 'Garbutt', 'Garrard', 'Godfrey', 'Grenville', 'Hambleton', 'Hammond']
function randomNickname() {
   let i = Math.floor(Math.random() * Nickname.length)
   let f = Math.floor(Math.random() * Familiya.length)
   console.log(Nickname[i])
   document.getElementById('mainPar').innerHTML = ('' + ' ' + Nickname[i] + '_' + Familiya[f] + ' ')
}
