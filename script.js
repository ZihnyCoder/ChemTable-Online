/*
  Full element dataset (s, p, d blocks included). f-block elements kept out of display grid by using placeholders.
  For heavy/superheavy elements some configs are simplified or listed in common form. Atomic radii are approximate (pm).
  You can edit values below if you want to tweak numbers.
*/

const elementsData = [
    // Row 1
    { z: 1, symbol: 'H', name: 'Hydrogen', group: 1, econfig: '1s1', radius: 53, posRow: 1, posCol: 1 },
    { z: 2, symbol: 'He', name: 'Helium', group: 18, econfig: '1s2', radius: 31, posRow: 1, posCol: 18 },

    // Row 2
    { z: 3, symbol: 'Li', name: 'Lithium', group: 1, econfig: '[He] 2s1', radius: 167, posRow: 2, posCol: 1 },
    { z: 4, symbol: 'Be', name: 'Beryllium', group: 2, econfig: '[He] 2s2', radius: 112, posRow: 2, posCol: 2 },
    { z: 5, symbol: 'B', name: 'Boron', group: 13, econfig: '[He] 2s2 2p1', radius: 87, posRow: 2, posCol: 13 },
    { z: 6, symbol: 'C', name: 'Carbon', group: 14, econfig: '[He] 2s2 2p2', radius: 67, posRow: 2, posCol: 14 },
    { z: 7, symbol: 'N', name: 'Nitrogen', group: 15, econfig: '[He] 2s2 2p3', radius: 56, posRow: 2, posCol: 15 },
    { z: 8, symbol: 'O', name: 'Oxygen', group: 16, econfig: '[He] 2s2 2p4', radius: 48, posRow: 2, posCol: 16 },
    { z: 9, symbol: 'F', name: 'Fluorine', group: 17, econfig: '[He] 2s2 2p5', radius: 42, posRow: 2, posCol: 17 },
    { z: 10, symbol: 'Ne', name: 'Neon', group: 18, econfig: '[He] 2s2 2p6', radius: 38, posRow: 2, posCol: 18 },

    // Row 3
    { z: 11, symbol: 'Na', name: 'Sodium', group: 1, econfig: '[Ne] 3s1', radius: 190, posRow: 3, posCol: 1 },
    { z: 12, symbol: 'Mg', name: 'Magnesium', group: 2, econfig: '[Ne] 3s2', radius: 145, posRow: 3, posCol: 2 },
    { z: 13, symbol: 'Al', name: 'Aluminium', group: 13, econfig: '[Ne] 3s2 3p1', radius: 118, posRow: 3, posCol: 13 },
    { z: 14, symbol: 'Si', name: 'Silicon', group: 14, econfig: '[Ne] 3s2 3p2', radius: 111, posRow: 3, posCol: 14 },
    { z: 15, symbol: 'P', name: 'Phosphorus', group: 15, econfig: '[Ne] 3s2 3p3', radius: 98, posRow: 3, posCol: 15 },
    { z: 16, symbol: 'S', name: 'Sulfur', group: 16, econfig: '[Ne] 3s2 3p4', radius: 88, posRow: 3, posCol: 16 },
    { z: 17, symbol: 'Cl', name: 'Chlorine', group: 17, econfig: '[Ne] 3s2 3p5', radius: 79, posRow: 3, posCol: 17 },
    { z: 18, symbol: 'Ar', name: 'Argon', group: 18, econfig: '[Ne] 3s2 3p6', radius: 71, posRow: 3, posCol: 18 },

    // Row 4 (includes d-block 21-30)
    { z: 19, symbol: 'K', name: 'Potassium', group: 1, econfig: '[Ar] 4s1', radius: 243, posRow: 4, posCol: 1 },
    { z: 20, symbol: 'Ca', name: 'Calcium', group: 2, econfig: '[Ar] 4s2', radius: 194, posRow: 4, posCol: 2 },
    { z: 21, symbol: 'Sc', name: 'Scandium', group: 3, econfig: '[Ar] 3d1 4s2', radius: 184, posRow: 4, posCol: 3 },
    { z: 22, symbol: 'Ti', name: 'Titanium', group: 4, econfig: '[Ar] 3d2 4s2', radius: 176, posRow: 4, posCol: 4 },
    { z: 23, symbol: 'V', name: 'Vanadium', group: 5, econfig: '[Ar] 3d3 4s2', radius: 171, posRow: 4, posCol: 5 },
    { z: 24, symbol: 'Cr', name: 'Chromium', group: 6, econfig: '[Ar] 3d5 4s1', radius: 166, posRow: 4, posCol: 6 },
    { z: 25, symbol: 'Mn', name: 'Manganese', group: 7, econfig: '[Ar] 3d5 4s2', radius: 161, posRow: 4, posCol: 7 },
    { z: 26, symbol: 'Fe', name: 'Iron', group: 8, econfig: '[Ar] 3d6 4s2', radius: 156, posRow: 4, posCol: 8 },
    { z: 27, symbol: 'Co', name: 'Cobalt', group: 9, econfig: '[Ar] 3d7 4s2', radius: 152, posRow: 4, posCol: 9 },
    { z: 28, symbol: 'Ni', name: 'Nickel', group: 10, econfig: '[Ar] 3d8 4s2', radius: 149, posRow: 4, posCol: 10 },
    { z: 29, symbol: 'Cu', name: 'Copper', group: 11, econfig: '[Ar] 3d10 4s1', radius: 145, posRow: 4, posCol: 11 },
    { z: 30, symbol: 'Zn', name: 'Zinc', group: 12, econfig: '[Ar] 3d10 4s2', radius: 142, posRow: 4, posCol: 12 },
    { z: 31, symbol: 'Ga', name: 'Gallium', group: 13, econfig: '[Ar] 3d10 4s2 4p1', radius: 136, posRow: 4, posCol: 13 },
    { z: 32, symbol: 'Ge', name: 'Germanium', group: 14, econfig: '[Ar] 3d10 4s2 4p2', radius: 125, posRow: 4, posCol: 14 },
    { z: 33, symbol: 'As', name: 'Arsenic', group: 15, econfig: '[Ar] 3d10 4s2 4p3', radius: 115, posRow: 4, posCol: 15 },
    { z: 34, symbol: 'Se', name: 'Selenium', group: 16, econfig: '[Ar] 3d10 4s2 4p4', radius: 120, posRow: 4, posCol: 16 },
    { z: 35, symbol: 'Br', name: 'Bromine', group: 17, econfig: '[Ar] 3d10 4s2 4p5', radius: 114, posRow: 4, posCol: 17 },
    { z: 36, symbol: 'Kr', name: 'Krypton', group: 18, econfig: '[Ar] 3d10 4s2 4p6', radius: 110, posRow: 4, posCol: 18 },

    // Row 5 (includes d-block 39-48)
    { z: 37, symbol: 'Rb', name: 'Rubidium', group: 1, econfig: '[Kr] 5s1', radius: 265, posRow: 5, posCol: 1 },
    { z: 38, symbol: 'Sr', name: 'Strontium', group: 2, econfig: '[Kr] 5s2', radius: 219, posRow: 5, posCol: 2 },
    { z: 39, symbol: 'Y', name: 'Yttrium', group: 3, econfig: '[Kr] 4d1 5s2', radius: 212, posRow: 5, posCol: 3 },
    { z: 40, symbol: 'Zr', name: 'Zirconium', group: 4, econfig: '[Kr] 4d2 5s2', radius: 206, posRow: 5, posCol: 4 },
    { z: 41, symbol: 'Nb', name: 'Niobium', group: 5, econfig: '[Kr] 4d4 5s1', radius: 198, posRow: 5, posCol: 5 },
    { z: 42, symbol: 'Mo', name: 'Molybdenum', group: 6, econfig: '[Kr] 4d5 5s1', radius: 190, posRow: 5, posCol: 6 },
    { z: 43, symbol: 'Tc', name: 'Technetium', group: 7, econfig: '[Kr] 4d5 5s2', radius: null, posRow: 5, posCol: 7 },
    { z: 44, symbol: 'Ru', name: 'Ruthenium', group: 8, econfig: '[Kr] 4d7 5s1', radius: 178, posRow: 5, posCol: 8 },
    { z: 45, symbol: 'Rh', name: 'Rhodium', group: 9, econfig: '[Kr] 4d8 5s1', radius: 173, posRow: 5, posCol: 9 },
    { z: 46, symbol: 'Pd', name: 'Palladium', group: 10, econfig: '[Kr] 4d10', radius: 163, posRow: 5, posCol: 10 },
    { z: 47, symbol: 'Ag', name: 'Silver', group: 11, econfig: '[Kr] 4d10 5s1', radius: 165, posRow: 5, posCol: 11 },
    { z: 48, symbol: 'Cd', name: 'Cadmium', group: 12, econfig: '[Kr] 4d10 5s2', radius: 161, posRow: 5, posCol: 12 },
    { z: 49, symbol: 'In', name: 'Indium', group: 13, econfig: '[Kr] 4d10 5s2 5p1', radius: 156, posRow: 5, posCol: 13 },
    { z: 50, symbol: 'Sn', name: 'Tin', group: 14, econfig: '[Kr] 4d10 5s2 5p2', radius: 140, posRow: 5, posCol: 14 },
    { z: 51, symbol: 'Sb', name: 'Antimony', group: 15, econfig: '[Kr] 4d10 5s2 5p3', radius: 139, posRow: 5, posCol: 15 },
    { z: 52, symbol: 'Te', name: 'Tellurium', group: 16, econfig: '[Kr] 4d10 5s2 5p4', radius: 138, posRow: 5, posCol: 16 },
    { z: 53, symbol: 'I', name: 'Iodine', group: 17, econfig: '[Kr] 4d10 5s2 5p5', radius: 133, posRow: 5, posCol: 17 },
    { z: 54, symbol: 'Xe', name: 'Xenon', group: 18, econfig: '[Kr] 4d10 5s2 5p6', radius: 130, posRow: 5, posCol: 18 },

    // Row 6 (note: La-Lu are skipped visually — placeholders used later)
    { z: 55, symbol: 'Cs', name: 'Cesium', group: 1, econfig: '[Xe] 6s1', radius: 298, posRow: 6, posCol: 1 },
    { z: 56, symbol: 'Ba', name: 'Barium', group: 2, econfig: '[Xe] 6s2', radius: 253, posRow: 6, posCol: 2 },
    // f-block placeholder (La-Lu) occupies cols 3..? in visual table: we'll insert empty cells in rendering
    { z: 72, symbol: 'Hf', name: 'Hafnium', group: 4, econfig: '[Xe] 4f14 5d2 6s2', radius: 159, posRow: 6, posCol: 4 },
    { z: 73, symbol: 'Ta', name: 'Tantalum', group: 5, econfig: '[Xe] 4f14 5d3 6s2', radius: 146, posRow: 6, posCol: 5 },
    { z: 74, symbol: 'W', name: 'Tungsten', group: 6, econfig: '[Xe] 4f14 5d4 6s2', radius: 139, posRow: 6, posCol: 6 },
    { z: 75, symbol: 'Re', name: 'Rhenium', group: 7, econfig: '[Xe] 4f14 5d5 6s2', radius: 137, posRow: 6, posCol: 7 },
    { z: 76, symbol: 'Os', name: 'Osmium', group: 8, econfig: '[Xe] 4f14 5d6 6s2', radius: 135, posRow: 6, posCol: 8 },
    { z: 77, symbol: 'Ir', name: 'Iridium', group: 9, econfig: '[Xe] 4f14 5d7 6s2', radius: 136, posRow: 6, posCol: 9 },
    { z: 78, symbol: 'Pt', name: 'Platinum', group: 10, econfig: '[Xe] 4f14 5d9 6s1', radius: 139, posRow: 6, posCol: 10 },
    { z: 79, symbol: 'Au', name: 'Gold', group: 11, econfig: '[Xe] 4f14 5d10 6s1', radius: 144, posRow: 6, posCol: 11 },
    { z: 80, symbol: 'Hg', name: 'Mercury', group: 12, econfig: '[Xe] 4f14 5d10 6s2', radius: 150, posRow: 6, posCol: 12 },
    { z: 81, symbol: 'Tl', name: 'Thallium', group: 13, econfig: '[Xe] 4f14 5d10 6s2 6p1', radius: 170, posRow: 6, posCol: 13 },
    { z: 82, symbol: 'Pb', name: 'Lead', group: 14, econfig: '[Xe] 4f14 5d10 6s2 6p2', radius: 175, posRow: 6, posCol: 14 },
    { z: 83, symbol: 'Bi', name: 'Bismuth', group: 15, econfig: '[Xe] 4f14 5d10 6s2 6p3', radius: 160, posRow: 6, posCol: 15 },
    { z: 84, symbol: 'Po', name: 'Polonium', group: 16, econfig: '[Xe] 4f14 5d10 6s2 6p4', radius: 168, posRow: 6, posCol: 16 },
    { z: 85, symbol: 'At', name: 'Astatine', group: 17, econfig: '[Xe] 4f14 5d10 6s2 6p5', radius: null, posRow: 6, posCol: 17 },
    { z: 86, symbol: 'Rn', name: 'Radon', group: 18, econfig: '[Xe] 4f14 5d10 6s2 6p6', radius: null, posRow: 6, posCol: 18 },

    // Row 7 (skip f-block actual elements — placeholders remain)
    { z: 87, symbol: 'Fr', name: 'Francium', group: 1, econfig: '[Rn] 7s1', radius: null, posRow: 7, posCol: 1 },
    { z: 88, symbol: 'Ra', name: 'Radium', group: 2, econfig: '[Rn] 7s2', radius: null, posRow: 7, posCol: 2 },
    // f-block placeholder
    { z: 104, symbol: 'Rf', name: 'Rutherfordium', group: 4, econfig: '[Rn] 5f14 6d2 7s2', radius: null, posRow: 7, posCol: 4 },
    { z: 105, symbol: 'Db', name: 'Dubnium', group: 5, econfig: '[Rn] 5f14 6d3 7s2', radius: null, posRow: 7, posCol: 5 },
    { z: 106, symbol: 'Sg', name: 'Seaborgium', group: 6, econfig: '[Rn] 5f14 6d4 7s2', radius: null, posRow: 7, posCol: 6 },
    { z: 107, symbol: 'Bh', name: 'Bohrium', group: 7, econfig: '[Rn] 5f14 6d5 7s2', radius: null, posRow: 7, posCol: 7 },
    { z: 108, symbol: 'Hs', name: 'Hassium', group: 8, econfig: '[Rn] 5f14 6d6 7s2', radius: null, posRow: 7, posCol: 8 },
    { z: 109, symbol: 'Mt', name: 'Meitnerium', group: 9, econfig: '[Rn] 5f14 6d7 7s2', radius: null, posRow: 7, posCol: 9 },
    { z: 110, symbol: 'Ds', name: 'Darmstadtium', group: 10, econfig: '[Rn] 5f14 6d8 7s2', radius: null, posRow: 7, posCol: 10 },
    { z: 111, symbol: 'Rg', name: 'Roentgenium', group: 11, econfig: '[Rn] 5f14 6d9 7s2', radius: null, posRow: 7, posCol: 11 },
    { z: 112, symbol: 'Cn', name: 'Copernicium', group: 12, econfig: '[Rn] 5f14 6d10 7s2', radius: null, posRow: 7, posCol: 12 },
    { z: 113, symbol: 'Nh', name: 'Nihonium', group: 13, econfig: '[Rn] 5f14 6d10 7s2 7p1', radius: null, posRow: 7, posCol: 13 },
    { z: 114, symbol: 'Fl', name: 'Flerovium', group: 14, econfig: '[Rn] 5f14 6d10 7s2 7p2', radius: null, posRow: 7, posCol: 14 },
    { z: 115, symbol: 'Mc', name: 'Moscovium', group: 15, econfig: '[Rn] 5f14 6d10 7s2 7p3', radius: null, posRow: 7, posCol: 15 },
    { z: 116, symbol: 'Lv', name: 'Livermorium', group: 16, econfig: '[Rn] 5f14 6d10 7s2 7p4', radius: null, posRow: 7, posCol: 16 },
    { z: 117, symbol: 'Ts', name: 'Tennessine', group: 17, econfig: '[Rn] 5f14 6d10 7s2 7p5', radius: null, posRow: 7, posCol: 17 },
    { z: 118, symbol: 'Og', name: 'Oganesson', group: 18, econfig: '[Rn] 5f14 6d10 7s2 7p6', radius: null, posRow: 7, posCol: 18 }
];

// Visual layout matrix (7 rows x 18 cols) — we'll insert empty placeholders for f-block where needed.
// We'll render row-by-row, placing empty cells where no element exists in that position.

const layout = [
    // Row 1
    ['H', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'He'],
    // Row 2
    ['Li', 'Be', null, null, null, null, null, null, null, null, null, null, 'B', 'C', 'N', 'O', 'F', 'Ne'],
    // Row 3
    ['Na', 'Mg', null, null, null, null, null, null, null, null, null, null, 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
    // Row 4
    ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
    // Row 5
    ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
    // Row 6 (La-Lu should be placeholders at col 3; we will render an empty at col3 and then continue with Hf at col4)
    ['Cs', 'Ba', 'f', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
    // Row 7 (Ac-Lr placeholder at col 3)
    ['Fr', 'Ra', 'f', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
];

// Helper to find element object by symbol
function findElementBySymbol(sym) {
    return elementsData.find(e => e.symbol === sym);
}

// render table
const periodicEl = document.getElementById('periodic');

function createCellForSymbol(sym) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (!sym) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        cell.appendChild(empty);
        return cell;
    }
    if (sym === 'f') { // placeholder for f-block gap
        const ph = document.createElement('div');
        ph.className = 'empty';
        ph.setAttribute('aria-hidden', 'true');
        cell.appendChild(ph);
        return cell;
    }
    const el = findElementBySymbol(sym);
    if (!el) {
        // unknown symbol — create hidden placeholder
        const unknown = document.createElement('div');
        unknown.className = 'empty';
        cell.appendChild(unknown);
        return cell;
    }

    const btn = document.createElement('button');
    btn.className = 'elem';
    btn.type = 'button';
    btn.setAttribute('data-z', el.z);
    btn.setAttribute('data-symbol', el.symbol);
    btn.setAttribute('data-group', el.group ?? '');
    btn.setAttribute('data-econfig', el.econfig ?? '');
    btn.setAttribute('data-radius', el.radius ?? '');
    btn.title = `${el.name} (${el.z}) — Group ${el.group ?? '—'}`;
    btn.innerHTML = `<div class="symbol">${el.symbol}</div><div class="z">#${el.z}</div>`;
    btn.addEventListener('click', () => selectElement(el.z));
    cell.appendChild(btn);
    return cell;
}

function renderPeriodic() {
    periodicEl.innerHTML = '';
    for (let r = 0; r < layout.length; r++) {
        const row = layout[r];
        for (let c = 0; c < row.length; c++) {
            const sym = row[c];
            // note: sym may be null, 'f', or symbol
            const cell = createCellForSymbol(sym);
            periodicEl.appendChild(cell);
        }
    }
}

// select element and populate details panel
const dtTitle = document.getElementById('dtTitle');
const dSymbol = document.getElementById('dSymbol');
const dNumber = document.getElementById('dNumber');
const dGroup = document.getElementById('dGroup');
const dConfig = document.getElementById('dConfig');
const dRadius = document.getElementById('dRadius');
const metaChips = document.getElementById('metaChips');
const dExplain = document.getElementById('dExplain');

function selectElement(z) {
    const el = elementsData.find(x => x.z === z);
    if (!el) return;

    // Save proton number so clicks and programmatic selects persist
    try {
        localStorage.setItem('lastProton', String(el.z));
    } catch (e) {
        // localStorage may be unavailable in some privacy modes — silently ignore
    }

    dtTitle.textContent = `${el.name} — Element Details`;
    dSymbol.textContent = el.symbol;
    dNumber.textContent = el.z;
    dGroup.textContent = el.group ?? '—';
    dConfig.textContent = el.econfig ?? '[placeholder]';
    dRadius.textContent = el.radius ? (el.radius + ' pm') : '[placeholder]';
    // meta chips: atomic number, group, radius
    metaChips.innerHTML = '';
    const chip1 = document.createElement('div');
    chip1.className = 'chip';
    chip1.textContent = `Atomic # ${el.z}`;
    metaChips.appendChild(chip1);
    const chip2 = document.createElement('div');
    chip2.className = 'chip';
    chip2.textContent = `Group ${el.group ?? '—'}`;
    metaChips.appendChild(chip2);
    const chip3 = document.createElement('div');
    chip3.className = 'chip';
    chip3.textContent = `Radius ${el.radius ? el.radius + ' pm' : '—'}`;
    metaChips.appendChild(chip3);

    // Auto-generated explanation sentence (fills placeholders)
    dExplain.innerHTML = ` <span style="color:#EAD637"> ${el.name} </span> atom has an electronic configuration of 
<span style="color:#EAD637">${el.econfig}</span>. 
Then, based on the valence electronic configuration, we can determine the corresponding block. 
The atom belongs to  <span style="color:#EAD637"> Group ${el.group ?? '—'}</span> 
and has <span style="color:#EAD637">${el.valence ?? el.group ?? '—'} valence electron(s)</span> 
in its outermost shell. 
Its atomic radius is <span style="color:#EAD637">${el.radius ? el.radius + ' pm' : 'unknown'}</span>, 
which depends on the strength of attraction between the nucleus and the valence shell. 
<span style="color:#EAD637"> The higher the number of shells (going down a group), the higher the atomic radius due to weaker attraction. </span>
While going across the period will result in <span style="color:#EAD637"> lower atomic radius due to stronger attraction </span> when the number of shells is constant but proton number increases.`;

    // focus effect (small)
    const btn = document.querySelector(`button.elem[data-z='${el.z}']`);
    if (btn) {
        btn.animate([{ transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }], { duration: 180 });
        btn.focus({ preventScroll: true });
    }
    // scroll details into view on small screens
    setTimeout(() => document.getElementById('details').scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
}

// search by atomic number
document.getElementById('searchBtn').addEventListener('click', () => {
    const v = Number(document.getElementById('searchNumber').value);
    if (!v || isNaN(v)) return alert('Enter a proton (atomic) number between 1 and 118');
    selectElement(v);
});

// render initially
renderPeriodic();

// Restore last selected proton (if any) and prefill search box
window.addEventListener('load', () => {
    try {
        const saved = localStorage.getItem('lastProton');
        if (saved) {
            const n = Number(saved);
            const found = elementsData.find(e => e.z === n);
            if (found) {
                document.getElementById('searchNumber').value = String(n);
                selectElement(n);
                return;
            }
        }
    } catch (e) {
        // ignore storage errors
    }
    // if nothing saved or invalid, do nothing (user can click/select)
});

// Optional: handle keyboard navigation (arrow keys) to move selection — small convenience.
let focusedZ = null;
document.addEventListener('keydown', (e) => {
    if (!focusedZ) return;
    const el = elementsData.find(x => x.z === focusedZ);
    if (!el) return;
    // find button index
    const btns = Array.from(document.querySelectorAll('button.elem'));
    const idx = btns.findIndex(b => Number(b.dataset.z) === focusedZ);
    if (idx === -1) return;

    if (e.key === 'ArrowRight') { // next
        const next = btns[idx + 1];
        if (next) {
            next.click();
            focusedZ = Number(next.dataset.z);
        }
    } else if (e.key === 'ArrowLeft') {
        const prev = btns[idx - 1];
        if (prev) {
            prev.click();
            focusedZ = Number(prev.dataset.z);
        }
    } else if (e.key === 'Escape') {
        focusedZ = null;
        document.getElementById('details').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// make clicking set focusedZ too
periodicEl.addEventListener('click', (ev) => {
    const b = ev.target.closest('button.elem');
    if (!b) return;
    focusedZ = Number(b.dataset.z);
});

const toggle = document.getElementById("threeToggle");
const knob = document.getElementById("knob");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let state = 0; // 0 = off, 1 = image1, 2 = image2

toggle.addEventListener("click", () => {
    state = (state + 1) % 3;

    // Reset images
    img1.style.display = "none";
    img2.style.display = "none";

    if (state === 0) {
        toggle.style.background = "#ccc";
        knob.style.transform = "translateX(0px)";
    } else if (state === 1) {
        toggle.style.background = "#4caf50";
        knob.style.transform = "translateX(23px)";
        img1.style.display = "block";
    } else if (state === 2) {
        toggle.style.background = "#2196f3";
        knob.style.transform = "translateX(46px)";
        img2.style.display = "block";
    }
});