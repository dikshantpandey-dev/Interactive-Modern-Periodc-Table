const categoryColors = {
  'alkali metal': '#FFA07A',
  'alkaline earth metal': '#20B2AA',
  'transition metal': '#778899',
  'post-transition metal': '#B0C4DE',
  'metalloid': '#FFD700',
  'reactive nonmetal': '#98FB98',
  'noble gas': '#F0E68C',
  'lanthanide': '#FFC0CB',
  'actinide': '#DDA0DD',
  'unknown properties': '#E6E6FA'
};

function disableSaveShortcut(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      event.preventDefault();
      console.log('Save function is disabled.');
  }
}

document.addEventListener('keydown', disableSaveShortcut);

setInterval(() => {
  document.removeEventListener('keydown', disableSaveShortcut);
  document.addEventListener('keydown', disableSaveShortcut);
}, 500); 

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

function shortenName(name) {
    const maxLength = 10;
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + '...';
    }
    return name;
}


function getGridPosition(number) {
  const positions = [
    { row: 1, column: 1 },   // Hydrogen
    { row: 1, column: 18 },  // Helium
    { row: 2, column: 1 },   // Lithium
    { row: 2, column: 2 },   // Beryllium
    { row: 2, column: 13 },  // Boron
    { row: 2, column: 14 },  // Carbon
    { row: 2, column: 15 },  // Nitrogen
    { row: 2, column: 16 },  // Oxygen
    { row: 2, column: 17 },  // Fluorine
    { row: 2, column: 18 },  // Neon
    { row: 3, column: 1 },   // Sodium
    { row: 3, column: 2 },   // Magnesium
    { row: 3, column: 13 },  // Aluminium
    { row: 3, column: 14 },  // Silicon
    { row: 3, column: 15 },  // Phosphorus
    { row: 3, column: 16 },  // Sulfur
    { row: 3, column: 17 },  // Chlorine
    { row: 3, column: 18 },  // Argon
    { row: 4, column: 1 },   // Potassium
    { row: 4, column: 2 },   // Calcium
    { row: 4, column: 3 },   // Scandium
    { row: 4, column: 4 },   // Titanium
    { row: 4, column: 5 },   // Vanadium
    { row: 4, column: 6 },   // Chromium
    { row: 4, column: 7 },   // Manganese
    { row: 4, column: 8 },   // Iron
    { row: 4, column: 9 },   // Cobalt
    { row: 4, column: 10 },  // Nickel
    { row: 4, column: 11 },  // Copper
    { row: 4, column: 12 },  // Zinc
    { row: 4, column: 13 },  // Gallium
    { row: 4, column: 14 },  // Germanium
    { row: 4, column: 15 },  // Arsenic
    { row: 4, column: 16 },  // Selenium
    { row: 4, column: 17 },  // Bromine
    { row: 4, column: 18 },  // Krypton
    { row: 5, column: 1 },   // Rubidium
    { row: 5, column: 2 },   // Strontium
    { row: 5, column: 3 },   // Yttrium
    { row: 5, column: 4 },   // Zirconium
    { row: 5, column: 5 },   // Niobium
    { row: 5, column: 6 },   // Molybdenum
    { row: 5, column: 7 },   // Technetium
    { row: 5, column: 8 },   // Ruthenium
    { row: 5, column: 9 },   // Rhodium
    { row: 5, column: 10 },  // Palladium
    { row: 5, column: 11 },  // Silver
    { row: 5, column: 12 },  // Cadmium
    { row: 5, column: 13 },  // Indium
    { row: 5, column: 14 },  // Tin
    { row: 5, column: 15 },  // Antimony
    { row: 5, column: 16 },  // Tellurium
    { row: 5, column: 17 },  // Iodine
    { row: 5, column: 18 },   // Xenon
    { row: 6, column: 1 },  // Cesium
    { row: 6, column: 2 },  // Barium
    { row: 10, column: 4 },  // Lanthanum
    { row: 10, column: 5 },  // Cerium
    { row: 10, column: 6 },  // Praseodymium
    { row: 10, column: 7 },  // Neodymium
    { row: 10, column: 8 },  // Promethium
    { row: 10, column: 9 },  // Samarium
    { row: 10, column: 10 },  // Europium
    { row: 10, column: 11 }, // Gadolinium
    { row: 10, column: 12 }, // Terbium
    { row: 10, column: 13 }, // Dysprosium
    { row: 10, column: 14 }, // Holmium
    { row: 10, column: 15 }, // Erbium
    { row: 10, column: 16 }, // Thulium
    { row: 10, column: 17 }, // Ytterbium
    { row: 10, column: 18 }, // Lutetium
    { row: 6, column: 4 },  // Hafnium
    { row: 6, column: 5 },  // Tantalum
    { row: 6, column: 6 },  // Tungsten
    { row: 6, column: 7 },  // Rhenium
    { row: 6, column: 8 },  // Osmium
    { row: 6, column: 9 },  // Iridium
    { row: 6, column: 10 }, // Platinum
    { row: 6, column: 11 }, // Gold
    { row: 6, column: 12 }, // Mercury
    { row: 6, column: 13 }, // Thallium
    { row: 6, column: 14 }, // Lead
    { row: 6, column: 15 }, // Bismuth
    { row: 6, column: 16 }, // Polonium
    { row: 6, column: 17 }, // Astatine
    { row: 6, column: 18 }, // Radon
    { row: 7, column: 1 },  // Francium
    { row: 7, column: 2 },  // Radium
    { row: 11, column: 4 },  // Radium
    { row: 11, column: 5 },  // Radium
    { row: 11, column: 6 },  // Radium
    { row: 11, column: 7 },  // Radium
    { row: 11, column: 8 },  // Radium
    { row: 11, column: 9 },  // Radium
    { row: 11, column: 10 },  // Radium
    { row: 11, column: 11 },  // Radium
    { row: 11, column: 12 },  // Radium
    { row: 11, column: 13 },  // Radium
    { row: 11, column: 14 },  // Radium
    { row: 11, column: 15 },  // Radium
    { row: 11, column: 16 },  // Radium
    { row: 11, column: 17 },  // Radium
    { row: 11, column: 18 },  // Radium
    { row: 7, column: 4 },  // Radium
    { row: 7, column: 5 },  // Radium
    { row: 7, column: 6 },  // Radium
    { row: 7, column: 7 },  // Radium
    { row: 7, column: 8 },  // Radium
    { row: 7, column: 9 },  // Radium
    { row: 7, column: 10 },  // Radium
    { row: 7, column: 11 },  // Radium
    { row: 7, column: 12 },  // Radium
    { row: 7, column: 13 },  // Radium
    { row: 7, column: 14 },  // Radium
    { row: 7, column: 15 },  // Radium
    { row: 7, column: 16 },  // Radium
    { row: 7, column: 17 },  // Radium
    { row: 7, column: 18 },  // Radium

  ];
  return positions[number - 1]; 
}

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('periodic-table-container');
//   const buttonsContainer = document.getElementById('category-buttons');

//   Object.keys(categoryColors).forEach(category => {
//     const button = document.createElement('button');
//     button.textContent = category;
//     button.style.backgroundColor = categoryColors[category];
//     button.onclick = () => filterElementsByCategory(category);
//     buttonsContainer.appendChild(button);
//   });

//   function filterElementsByCategory(category) {
//     fetch('elements')
//       .then(response => response.json())
//       .then(data => {
//         container.innerHTML = '';
//         data.elements.filter(element => element.category === category)
//           .forEach(element => {
//             const elementDiv = document.createElement('div');
//             elementDiv.classList.add('element');
//             elementDiv.style.backgroundColor = categoryColors[element.category];
//             elementDiv.innerHTML = `
//               <div class="number">${element.number}</div>
//               <div class="symbol">${element.symbol}</div>
//               <div class="name">${shortenName(element.name)}</div>
//             `;
//             container.appendChild(elementDiv);
//           });
//       });
//   }

//   filterElementsByCategory('alkali metal');

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        alert('Save function is disabled!');
    }
  });


  fetch('elements')
    .then(response => response.json())
    .then(data => {
      data.elements.slice(0, 118).forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        const position = getGridPosition(element.number);
        elementDiv.style.gridColumnStart = position.column;
        elementDiv.style.gridRowStart = position.row;
        elementDiv.style.backgroundColor = categoryColors[element.category] || '#FFFFFF';
        elementDiv.innerHTML = `
        
          <div class="hover_element">
          <p class="hover_element_number">${element.number}</p>
          <b class="symbol_text">${element.symbol}</b>
          <p class="hover_element_name">${element.name}</p>
          </div>
          <div class="number">${element.number}</div>
          <div class="symbol">${element.symbol}</div>
          <div class="name">${element.name}</div>
        `;
        container.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
          showElementDetails(element);
        });
      });
      var cards = document.querySelectorAll('.element');

      // Iterate through each card
      cards.forEach(function(card) {
          card.addEventListener('mouseenter', function() {
              // When mouse enters the card, bring the card to the front
              this.style.zIndex = 9999;
              const hover_card=  card.getElementsByClassName("hover_element")[0]
              hover_card.style.backgroundColor=card.style.backgroundColor

              console.log(hover_card)
          });
          card.addEventListener('mouseleave', function() {
              // Reset z-index when mouse leaves the card
              this.style.zIndex = 1;
          });
      });
    });

  const modal = document.getElementById('element-modal');
  // const closeModal = document.getElementById('close-modal');

  // closeModal.onclick = function() {
  //   modal.style.display = "none";
  // };

  window.onclick = function(event) {
    const modal = document.getElementById('element-modal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

    function showElementDetails(element) {
      const modelFilePath = `/models/element_${String(element.number).padStart(3, '0')}_${element.name.toLowerCase()}.glb`;


        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = "";
        const modal_data_html = `
        <div class="modal-header">
        <h2>Visual Representation</h2>
        <span id="close-modal" class="close">&times;</span>
        </div>
            <model-viewer src="${modelFilePath}" alt="3D model of ${element.name}" 
              auto-rotate camera-controls background-color="#fff" 
              style="width: 100%; height: 400px;"></model-viewer>

            <h1>${element.name} (${element.symbol})</h1>
            <p><strong>Atomic Number:</strong> ${element.number}</p>
            <p><strong>Atomic Mass:</strong> ${element.atomic_mass} amu</p>
            <p><strong>State at Room Temperature:</strong> ${element.phase}</p>
            <p><strong>Group:</strong> ${element.group}</p>
            <p><strong>Period:</strong> ${element.period}</p>
            <p><strong>Category:</strong> ${element.category}</p>
            <p><strong>Boiling Point:</strong> ${element.boil} K</p>
            <p><strong>Melting Point:</strong> ${element.melt} K</p>
            <p><strong>Electron Configuration:</strong> ${formatElectronConfiguration(element.electron_configuration)}</p>
            <p><strong>Discovered by:</strong> ${element.discovered_by}</p>
            <p><strong>Named by:</strong> ${element.named_by}</p>
            <p><strong>Electron Shells:</strong> ${element.shells.join(', ')}</p>
            <p><strong>Interesting Facts:</strong> ${element.summary}</p>`;
        modal.style.display = "block";
        modalBody.insertAdjacentHTML("beforeend", modal_data_html)
        const closeModal = document.getElementById('close-modal');

        closeModal.addEventListener("click", () => {
          modal.style.display = "none";

        })
    }

    function formatElectronConfiguration(config) {
        return config.replace(/([spdfg])(\d+)/g, (match, l, n) => `${l}<sup>${n}</sup>`);
    }
});
