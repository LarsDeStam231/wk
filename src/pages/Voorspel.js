import React, {useState} from 'react';
import "./styles.css";
import {teamlist, poules, matches} from './Data.js';

const Voorspel = () => {

  const [voorspelling, setVoorspelling]= useState(JSON.parse(localStorage.getItem('voorspelling') || '[]'));
  const [poule, setPoule]= useState(localStorage.getItem('poule') || "A");
  // hier word de waardes van de input velden opgeslagen op de pagina zodat als de pagina ververst word dezelfde gegevens er nog in staan
  // voorbeeld: [{id: 1, team1: 2, team2: 1}]
  const handleEditChange = (evt) => {
  //  console.log(evt.target.id, evt.target.value)
    const matchid = evt.target.id.split('_')[1];
    const voorsp = JSON.parse(JSON.stringify(voorspelling));
    var item = voorsp.find((thisitem) => thisitem.id == matchid);
    if (!item){
      item = {id: matchid, team1: 0, team2: 0}
      voorsp.push(item)
    }
//hier word gekeken of de wedstrijd al bestaat, en als dat niet het geval is moet die de item maken zoals aangegeven
    if (evt.target.id.match(/team1/))
      item.team1 = evt.target.value;
    else
      item.team2 = evt.target.value;
    setVoorspelling(voorsp);
    localStorage.setItem('voorspelling', JSON.stringify(voorsp))
    // hierin word de waarde gemaakt van wat op het bovenste deel van de pagina opgeslagen word

    console.log(voorsp)

    teamlist.map(team => team.played = 0);
    teamlist.map(team => team.points = 0);
    teamlist.map(team => team.wins = 0);
    teamlist.map(team => team.losses = 0);
    teamlist.map(team => team.draws = 0);
    teamlist.map(team => team.scored = 0);
    teamlist.map(team => team.conceded = 0);
    teamlist.map(team => team.gd = 0);
//hierin geef ik aan dat elk team standaard een waarde heeft van 0 gespeelde wedstrijden

    voorsp.filter((match) => match.team1 && match.team2).map((voor) => {
      const match = matches.find((match) => match.id == voor.id)
console.log(match)
//hierin wil ik dat hij door de wedstrijden en voorspellingen heen gaat en gaat checken of of er bij de de match van team1 en team2 een waarde is ingevoerd
//en dat doet ie aan de hand van de waardes die je invult te matchen met de wedstrijd van hetzelfde land
      const teamone = teamlist.find(team => team.id == match.teamone)
      const teamtwo = teamlist.find(team => team.id == match.teamtwo)

      teamone.played++
      teamtwo.played++

//hierin staat aangegeven dat zodra er bij beide waardes wat is ingevuld de gespeelde wedstrijden +1 gaan

      console.log(voor)

      if (voor.team1 > voor.team2) {
        teamone.points+=3
        teamone.wins++
        teamtwo.losses++
      } else if (voor.team1 < voor.team2) {
        teamtwo.points+=3
        teamone.losses++
        teamtwo.wins++
      } else {
        teamone.points++
        teamtwo.points++
        teamone.draws++
        teamtwo.draws++
      }
//ook krijgen de team wie gewonnen of verloren heeft 3 punten, bij gelijkspel krijgen beide teams 1 punt
//de teams die winnen krijgen onder het kopje gewonnen +1 en wie verloren heeft krijgt ook +1, als ze gelijk spelen krijgen beide teams 1 erbij

    teamone.scored+=parseInt(voor.team1);
    teamtwo.scored+=parseInt(voor.team2);
    teamone.conceded+=parseInt(voor.team2);
    teamtwo.conceded+=parseInt(voor.team1);

//hier word gechecked hoeveel doelpunten en tegendoelpunten elk team heeft gekregen doormiddel van de waardes die ingevoerd zijn te checken

    teamone.gd+=parseInt(voor.team1)-parseInt(voor.team2);
    teamtwo.gd+=parseInt(voor.team2)-parseInt(voor.team1);

//hier word het doelsaldo gechecked door de goals van het eerste team te aftrekken van de goals van het tweede team, en vice versa voor de andere kant


//dit is een test


      console.log(teamone, teamtwo, match);

  });


  }

  return (

  <div>
  <h1>test</h1>
  {matches.map((match) => {
    const teamone = teamlist.find(team => team.id == match.teamone)
    const teamtwo = teamlist.find(team => team.id == match.teamtwo)
    var item = voorspelling.find((thisitem) => thisitem.id == match.id) || {id: match.id, team1: null, team2: null};
    //console.log(item, match);
    //hier zorg ik dat 2 arrays aan elkaar verbonden zijn zodat de code weet welke landen die moet printen op de pagina
    return (<table key={'match_'+match.id}>
  <tr>
    <th>thuis</th>
    <th>uit</th>
    <th>tijd</th>
  </tr>
  <tr>
    <td><img className="photo" src={teamone.flag} /><label for="team1">{match.teamone}<br /></label>
        <input type="number" id={"team1_"+match.id} name="team1" onChange={handleEditChange} value={item.team1}/></td>
    <td><label for="team2">{match.teamtwo}<img className="photo" src={teamtwo.flag} /><br /></label>
        <input type="number" id={"team2_"+match.id} name="team2"  onChange={handleEditChange} value={item.team2} /></td>
    <td>{match.date}<br />{match.time}</td>
  </tr>
</table>
//hierin word de voorspellingstabel gemaakt waar je de scores kan invullen
)}
)
}
<br />


  <table class="standing">
    <tr>
      <th>Plek</th>
      <th>Team</th>
      <th>gespeeld</th>
      <th>punten</th>
      <th>gewonnen</th>
      <th>verloren</th>
      <th>gelijk</th>
      <th>goals voor</th>
      <th>goals tegen</th>
      <th>doelsaldo</th>
    </tr>
    {teamlist.filter((team) => team.poule == poule).sort((a,b)=>b.points - a.points || b.gd - a.gd || b.scored - a.scored || a.conceded - b.conceded).map((team, index) => {

      return(
      <tr>
        <td>{index+1}</td>
        <td>{team.id}</td>
        <td>{team.played}</td>
        <td>{team.points}</td>
        <td>{team.wins}</td>
        <td>{team.losses}</td>
        <td>{team.draws}</td>
        <td>{team.scored}</td>
        <td>{team.conceded}</td>
        <td>{team.gd}</td>
      </tr>
    )
    })}


  </table>
</div>


//hier staat de tabel met alle gegevens die gemaakt zijn uit de score van de vorige tabel
)
}

export default Voorspel;
