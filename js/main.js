//html classe
const teamContainer = document.querySelector(".team-container");

//array membri
const membriTeam = [
    {
        nome:'Wayne Barrett',
        ruolo:'Founder & CEO',
        foto:'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto:'img/walter-gordon-office-manager.jpg',
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'img/scott-estrada-developer.jpg',
    },
    {
        nome:'Barabara Ramos',
        ruolo:'Graphic Designer',
        foto:'img/barbara-ramos-graphic-designer.jpg',
    },
]

//ciclo per stampare
for(let i = 0; i < membriTeam.length; i++) {
    const membroTeam = membriTeam[i]
    
    const template = `<div class="team-card">
                        <div class="card-image">
                          <img
                            src= ${membroTeam.foto}
                          />
                        </div>
                        <div class="card-text">
                          <h3>${membroTeam.nome}</h3>
                          <p>${membroTeam.ruolo}</p>
                        </div>
                      </div>`

    teamContainer.innerHTML += template;
}