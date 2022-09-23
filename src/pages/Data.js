const poules = [
  {id: 'A', description: 'Poule A'},
  {id: 'B', description: 'Poule B'},
  {id: 'C', description: 'Poule C'},
  {id: 'D', description: 'Poule D'},
  {id: 'E', description: 'Poule E'},
  {id: 'F', description: 'Poule F'},
  {id: 'G', description: 'Poule G'},
  {id: 'H', description: 'Poule H'},

]
;

const teamlist = [
  {id: 'NED', description: 'Nederland', flag: "logos/NED.png", poule: 'A', captain: 'Virgil van Dijk', ranking: '10', lastplacement:'de qualificatie', highestplacement: 'plek 2', points: '0', played: '0', wins: '0', losses: '0', draws:'0', scored: '0', conceded: '0', gd: '0'},
  {id: 'ECU', description: 'Ecuador', flag: "logos/ECU.png", poule: 'A', captain: 'Enner Valencia', ranking: '46', lastplacement:'de qualificatie', highestplacement: 'plek 2', points: '0', played: '0', played: '0', played: '0', wins: '0', losses: '0', draws:'0', scored: '0', conceded: '0', gd: '0'},
  {id: 'SEN', description: 'Senegal', flag: "logos/SEN.png", poule: 'A', captain: 'Kalidou Koulibaly', ranking: '20', lastplacement:'de groepsfase', highestplacement: 'de kwartfinale', points: '0', played: '0', played: '0', wins: '0', losses: '0', draws:'0', scored: '0', conceded: '0', gd: '0'},
  {id: 'QAT', description: 'Qatar', flag: "logos/QAT.png", poule: 'A', captain: 'Hassan Al-Haydos', ranking: '51', lastplacement:'de qualificatie', highestplacement: 'de qualificatie', points: '0', played: '0', wins: '0', losses: '0', draws:'0', scored: '0', conceded: '0', gd: '0'},

  {id: 'ENG', description: 'Engeland', flag: "logos/ENG.png", poule: 'B', captain: 'Harry Kane', ranking: '5', lastplacement:'plek 4', highestplacement: 'plek 1'},
  {id: 'IRN', description: 'Iran', flag: "logos/IRN.png", poule: 'B', captain: 'Ehsan Hajsafi', ranking: '21', lastplacement:'de groepsfase', highestplacement: 'de groepsfase'},
  {id: 'USA', description: 'de Verenigde Staten', flag: "logos/USA.png", poule: 'B', captain: 'Tyler Adams', ranking: '15', lastplacement:'de qualificatie', highestplacement: 'plek 3'},
  {id: 'WAL', description: 'Wales', flag: "logos/WAL.png", poule: 'B', captain: 'Gareth Bale', ranking: '18', lastplacement:'de qualificatie', highestplacement: 'de kwartfinale'},

  {id: 'ARG', description: 'Argentinië', flag: "logos/ARG.png", poule: 'C', captain: 'Lionel Messi', ranking: '4', lastplacement:'de laatste 16', highestplacement: 'plek 1'},
  {id: 'SAU', description: 'Saudi-Arabië', flag: "logos/SAU.png", poule: 'C', captain: 'Salman Al-Faraj', ranking: '49', lastplacement:'de groepsfase', highestplacement: 'de laatste 16'},
  {id: 'MEX', description: 'Mexico', flag: "logos/MEX.jpg", poule: 'C', captain: 'Andrés Guardado', ranking: '9', lastplacement:'de laatste 16', highestplacement: 'de kwartfinale'},
  {id: 'POL', description: 'Polen', flag: "logos/POL.png", poule: 'C', captain: 'Robert Lewandowski', ranking: '26', lastplacement:'de groepsfase', highestplacement: 'plek 3'},

  {id: 'FRA', description: 'Frankrijk', flag: "logos/FRA.png", poule: 'D', captain: 'Hugo Lloris', ranking: '3', lastplacement:'plek 1', highestplacement: 'plek 1'},
  {id: 'AUS', description: 'Australië', flag: "logos/AUS.png", poule: 'D', captain: 'Matthew Ryan', ranking: '42', lastplacement:'de groepsfase', highestplacement: 'de laatste 16'},
  {id: 'DEN', description: 'Denemarken', flag: "logos/DEN.png", poule: 'D', captain: 'Simon Kjear', ranking: '11', lastplacement:'de laatste 16', highestplacement: 'de kwartfinale'},
  {id: 'TUN', description: 'Tunesië', flag: "logos/TUN.png", poule: 'D', captain: 'Youssef Msakni', ranking: '35', lastplacement:'de groepsfase', highestplacement: 'de groepsfase'},

  {id: 'ESP', description: 'Spanje', flag: "logos/ESP.png", poule: 'E', captain: 'Sergio Busquets', ranking: '7', lastplacement:'de laatste 16', highestplacement: 'plek 1'},
  {id: 'CRC', description: 'Costa Rica', flag: "logos/CRC.png", poule: 'E', captain: 'Bryan Ruiz', ranking: '31', lastplacement:'de groepsfase', highestplacement: 'de kwartfinale'},
  {id: 'GER', description: 'Duitsland', flag: "logos/GER.png", poule: 'E', captain: 'Manuel Neuer', ranking: '12', lastplacement:'de groepsfase', highestplacement: 'plek 1'},
  {id: 'JAP', description: 'Japan', flag: "logos/JAP.png", poule: 'E', captain: 'Maya Yoshida', ranking: '23', lastplacement:'de laatste 16', highestplacement: 'de laatste 16'},

  {id: 'BEL', description: 'België', flag: "logos/BEL.png", poule: 'F', captain: 'Eden Hazard', ranking: '2', lastplacement:'plek 3', highestplacement: 'plek 3'},
  {id: 'CAN', description: 'Canada', flag: "logos/CAN.png", poule: 'F', captain: 'Atiba Hutchinson', ranking: '38', lastplacement:'de qualificatie', highestplacement: 'de groepsfase'},
  {id: 'MAR', description: 'Marokko', flag: "logos/MAR.png", poule: 'F', captain: 'Romain Saïss', ranking: '24', lastplacement:'de groepsfase', highestplacement: 'de laatste 16'},
  {id: 'CRO', description: 'Kroatië', flag: "logos/CRO.png", poule: 'F', captain: 'Luka Modric', ranking: '16', lastplacement:'plek 2', highestplacement: 'plek 2'},

  {id: 'BRA', description: 'Brazilië', flag: "logos/BRA.png", poule: 'G', captain: 'Casemiro', ranking: '1', lastplacement:'de kwartfinale', highestplacement: 'plek 1'},
  {id: 'SER', description: 'Servië', flag: "logos/SER.png", poule: 'G', captain: 'Dusan Tadic', ranking: '25', lastplacement:'de groepsfase', highestplacement: 'plek 4'},
  {id: 'SUI', description: 'Zwitserland', flag: "logos/SUI.png", poule: 'G', captain: 'Granit Xhaka', ranking: '14', lastplacement:'laatste 16', highestplacement: 'de kwartfinale'},
  {id: 'CMR', description: 'Kameroen', flag: "logos/CMR.png", poule: 'G', captain: 'Vincent Aboubakar', ranking: '37', lastplacement:'de qualificatie', highestplacement: 'de kwartfinale'},

  {id: 'POR', description: 'Portugal', flag: "logos/POR.png", poule: 'H', captain: 'Cristiano Ronaldo', ranking: '8', lastplacement:'de laatste 16', highestplacement: 'plek 3'},
  {id: 'GHA', description: 'Ghana', flag: "logos/GHA.png", poule: 'H', captain: 'André Ayew', ranking: '60', lastplacement:'de qualificatie', highestplacement: 'plek 5'},
  {id: 'URU', description: 'Uruguay', flag: "logos/URU.png", poule: 'H', captain: 'Diego Godin', ranking: '13', lastplacement:'de kwartfinale', highestplacement: 'plek 1'},
  {id: 'KOR', description: 'Zuid-Korea', flag: "logos/KOR.png", poule: 'H', captain: 'Heung-min Son', ranking: '29', lastplacement:'de groepsfase', highestplacement: 'plek 4'},

]
;

const matches = [
{id: '1', bracket: 'A', teamone:'QAT', teamtwo:'ECU', date:'20-11-2022', time:'17:00'},
{id: '2', bracket: 'A', teamone:'SEN', teamtwo:'NED', date:'21-11-2022', time:'17:00'},
{id: '3', bracket: 'A', teamone:'QAT', teamtwo:'SEN', date:'25-11-2022', time:'14:00'},
{id: '4', bracket: 'A', teamone:'NED', teamtwo:'ECU', date:'25-11-2022', time:'17:00'},
{id: '5', bracket: 'A', teamone:'ECU', teamtwo:'SEN', date:'29-11-2022', time:'16:00'},
{id: '6', bracket: 'A', teamone:'NED', teamtwo:'QAT', date:'29-11-2022', time:'16:00'}

]
;

module.exports = {teamlist:teamlist, poules:poules, matches:matches}
